import React from 'react';


//封装的formProvider函数，高阶函数，传入一个组件，返回一个新的组件
//参数是name age gender 的默认值和判断状态条件
function formProvider (fields) {
  // return一个FormComponent组件，参数是一个Comp组件
  return function (Comp) {
    // 声明一个对象，存储fields的内容
    const initialFormState = {};
    // 循环fields对象，存储value和error的信息
    for (const key in fields) {
      initialFormState[key] = {
        value: fields[key].defaultValue,
        error: ''
      };
    }
    // initialFormState{
    //    name:{
    //      value:,
    //      error
    //    },
    //    age:{},
    //    gender:{}
    // }

    // 声明一个FormComponent组件
    class FormComponent extends React.Component {

      constructor (props) {
        super(props);
        // 设置默认state
        this.state = {
          form: initialFormState,
          formValid: false
        };

        // 组件函数
        this.handleValueChange = this.handleValueChange.bind(this);
      }
      // handleValueChange函数，参数为  调用handleValueChange函数的 eleName和它的value值
      handleValueChange (fieldName, value) {
        // 获取自身组件的state
        const { form } = this.state;

        // 声明一个新对象，存储触发事件的value，记录状态的valid值，和error
        const newFieldState = {value, valid: true, error: ''};

        // 获取触发事件eleName值相对应，判断条件
        const fieldRules = fields[fieldName].rules;//{ {pattern:function(){},error:''},{pattern:} }

        // for循环条件
        for (let i = 0; i < fieldRules.length; i++) {
          // 取得相应eleName的rules
          const {pattern, error} = fieldRules[i];
          let valid = false;
          // 判断valid为true时，说明需要提示
          if (typeof pattern === 'function') {
            valid = pattern(value);
          } else {
            valid = pattern.test(value);
          }
          // 判断相应eleName的valid不为true时，没有提示，
          if (!valid) {
            newFieldState.valid = false;
            newFieldState.error = error;
            break;
          }
        }
        //const 声明newForm = { 
        //                      form:{name:,age:,gender:},
        //                      []:{ value,valid:false,error:'' }
        //                      }
        const newForm = {...form, [fieldName]: newFieldState};
        
        // formValid = true || false
        // Object.value(newForm)//遍历对象本身
        // 判断每个valid是否都为true时，formValid为true。
        // 有一个valid为false时，formValid为false，为false时不能进行请求
        const formValid = Object.values(newForm).every(f => f.valid);
       
        // 每次value改变更新form和fomrValid
        this.setState({
          form: newForm,
          formValid
        });
      }

      // render时，高阶函数把参数传到Comp组件中
      render () {
        const {form, formValid} = this.state;
        return <Comp {...this.props} form={form} formValid={formValid} onFormChange={this.handleValueChange}/>
      }
    }

    // 返回组件
    return FormComponent;
  }
}

export default formProvider;