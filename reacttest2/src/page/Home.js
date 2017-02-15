// 引入依赖
import React from 'react';
import formProvider from '../utils/formProvider';
import FormItem from '../components/FormItem'

// 声明Home组件
class Home extends React.Component {
  // 登录函数
  handleSubmit (e) {
    e.preventDefault();  /*阻止默认事件*/

    // 高阶组件传过来的参数 form用于提交表单的   formValid是三个的valid都为false时他才为false
    const {form: {name, age, gender}, formValid} = this.props;
// formValid为false时可以提交
    console.log(formValid);
    if (!formValid) {
      alert('请填写正确的信息后重试');
      return;
    }

// fetch请求
    fetch('http://localhost:3000/user', {
      method: 'post',
      body: JSON.stringify({
        name: name.value,
        age: age.value,
        gender: gender.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.id) {
          alert('添加用户成功');
          this.setState({
            name: '',
            age: 0,
            gender: ''
          });
        } else {
          alert('添加失败');
        }
      })
      .catch((err) => console.error(err));
  }
  render () {
// 声明的得到参数  onFormChange是一个高阶函数，是Home组件继承formProvider文件里组件的方法
    const {form: {name, age, gender}, onFormChange} = this.props;
    return (
      <div>
        <header>
          <h1>添加用户</h1>
        </header>

        <main>
{/*表单提交*/}
          <form onSubmit={(e) => this.handleSubmit(e)}> 

            <FormItem label="用户名：" valid={name.valid} error={name.error}>
              <input type="text" value={name.value} onChange={(e)=>onFormChange('name',e.target.value)} />
            </FormItem>
            <br/>
            <FormItem label="年龄：" valid={age.valid} error={age.error}>
              <input type="number" value={age.value || ''} onChange={(e)=>onFormChange('age',+e.target.value)}/>
            </FormItem>
            <br/>
            <FormItem label="性别" valid={gender.valid} error={gender.error}>
              <select value={gender.value} onChange={(e)=>onFormChange('gender',e.target.value)}>
                <option value="">请选择</option>
                <option value="male">男</option>
                <option value="female">女</option>
              </select>
            </FormItem>
            <input type="submit" value="提交"/>
          </form>
        </main>
      </div>
    );
  }
}


// 组件封装调用，穿进去默认值和rules的判断的条件
Home = formProvider({
  name: {
    defaultValue: '',
    rules: [
      {
        pattern: function (value) {
          return value.length > 0;
        },
        error: '请输入用户名'
      },
      {
        pattern: /^.{1,4}$/,
        error: '用户名最多4个字符'
      }
    ]
  },
  age: {
    defaultValue: 0,
    rules: [
      {
        pattern: function (value) {
          return value >= 1 && value <= 100;
        },
        error: '请输入1~100的年龄'
      }
    ]
  },
  gender: {
    defaultValue: '',
    rules: [
      {
        pattern: function (value) {
          return !!value;
        },
        error: '请选择性别'
      }
    ]
  }
})(Home);

export default Home;