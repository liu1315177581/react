// 引入各种依赖
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,hashHistory } from 'react-router';  

// 引入两个组件
import UserAddPage from './page/UserAdd';
import HomePage from './page/Home';

// 添加到真实的DOM中
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={UserAddPage}/>
		<Route path="/user/add" component={HomePage} />
	</Router>,
	document.getElementById('app')
)