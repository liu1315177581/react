import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,hashHistory } from 'react-router';
import UserAddPage from './page/UserAdd';
import HomePage from './page/Home';
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={HomePage}/>
		<Route path="/user/add" component={UserAddPage} />
	</Router>,
	document.getElementById('app')
)