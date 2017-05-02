import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Progress, message } from 'antd';

export default class Counter extends Component{

	state = {
		count:98,
		MaxCount:100,
		MinCount:0
	};
	get methods(){
		let state = this.state;
		let setState = this.setState.bind(this);
		return{
			handle(){
				if(state.count>state.MaxCount){
					message.warn('不要点了')
				}
				setState({count:++state.count})
			},
			handleSubtract(){
				if(state.count<state.MinCount){
					message.warn("不要点了");
					
				}
				setState({count:--state.count})
			}
		}
	};
	render(){
		let { count } = this.state;
		let { handleSubtract,handle } = this.methods;
		return(
			<div>
				<div>
					<Button size="small" onClick={handle}>+</Button>
					<Button size="small" onClick={handleSubtract}>-</Button>
				</div>
				<Progress type="circle" width={ 80 } percent={ count } />
			</div>
		)
	}
}