import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import chenshi from './doms'


const myapp = (state) =>{  //给予数据在渲染层的
	return{
		counter: state.addcp,
    doemvalue:state.addcpp
	}
}


const onetiome = (text) => {
  return{
    type:"INCREMENT_COUNTERA",
    text
  }
}


const onIncrement =() => {
   return{
   	 type: "INCREMENT_COUNTER"
   	}
   }

const onIncrements =() => {
   return{
   	 type: "DECREMENT"
   	}
   }


function mapDispatchToProps(dispatch) {
  return {
		onIncrement: bindActionCreators(onIncrement, dispatch),
		onIncrements: bindActionCreators(onIncrements, dispatch),
    onetiome:bindActionCreators(onetiome, dispatch),
	}
}
export default connect(myapp,mapDispatchToProps)(chenshi)
