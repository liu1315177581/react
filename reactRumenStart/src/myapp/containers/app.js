import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import AddTodot from './buttons'
import {addTodo} from './seraction'
import only from './mystyle/only.scss'
import styles from './mystyle/tow.scss'


class Denglu extends Component{  //组建嵌套  登陆组建

	constructor(){
		super();
		this.state={
			inputname:true,
			denglu:true
		}
	}

	render(){
		const {dispatch} = this.props;
		return(
			<div className={styles.oneclass} style={{paddingTop:'35%'}}>
				<div className={[this.state.denglu?'':styles.denglunonde,styles.headerinput].join(' ')}>
				    <input className={this.state.inputname?'':styles.headerinputt} 
						onFocus={this.onchengs.bind(this)} 
						onBlur={this.onblurs.bind(this)} 
						type='text' ref='input'
					/>
					<input ref='posst' type='password'/>
					<AddTodot myclick={this.qingkong.bind(this)} lost={'取消'}/>
					<button onClick={this.handleClick.bind(this)} className={styles.onebuton}>登陆</button>
				</div>
				<Zhuye Visiterstb={this.props.Visitersta} mythis={this.state.denglu} Visiterst={this.props.Visiterst}/>
			</div>
			)
	}

	handleClick() {
		const node = this.refs.input;
		const text = node.value.trim();
		const posst = this.refs.posst.value;
		if(text == ""||posst==""){
			return
		}else{
			this.props.dispatch(addTodo(text));
			this.setState({
				denglu:false
			})
		}
  	}

  	qingkong(){
  		this.refs.input.value='';
  		this.refs.posst.value='';
  	}	

  	onchengs(){
  		this.setState({
  			inputname:false
  		})
  	}
  	onblurs(){
  		this.setState({
  			inputname:true
  		})
  	}

}


class Zhuye extends Component{ //登陆后显示的内容
	render(){
		return(
			<div className={[this.props.mythis?styles.denglunonde:'',styles.mygo].join(' ')}>
				<p>{this.props.Visiterstb}:你好，欢迎登陆</p>
				<ul>
					<li><Link to="tapgo">点击此处多页面</Link></li>
					<li><Link to="myadds">点击添加删除</Link></li>
				</ul>
			</div>
			)
	}
}


class App extends Component{  //总控制台
	constructor(props){
		super(props);
		const myHeight = document.body.clientHeight||document.documentElement.clientHeight
		this.state={
			heights:myHeight,
			zhuye:true
		}
		console.log(myHeight)
	}

	render(){
		const {Visiterst} = this.props;
		return(
			<div style={{height:this.state.heights}} className={styles.oneapp}>
				<Denglu Visitersta={Visiterst} post={this.state.heights} dispatch={this.props.dispatch}/>
			</div>
			)
	}

}




const select = (state)=>{   //redux数据处理
  return {
    Visiters:state.addcpp,
    Visiterst:state.visibilityFilter //账号数据
  }
}


export default connect(select)(App)