import React,{Component,ProTypes} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import AddTodot from './buttons'
import {addTodo} from './seraction'
import only from './mystyle/only.scss'
import styles from './mystyle/tow.scss'

class Denglu extends Component{
	constructor(){
		super();
		this.state={
			inputname:true,
			denglu:true
		}
	}
}