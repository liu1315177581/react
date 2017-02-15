import React from 'react'
import {Link} from 'react-router'



class UserAdd extends React.Component{
	render(){
		return (
			<div>User add.page
				<Link to='/user/add'>链接</Link>  
					{/*
					等于  a href="/user/add"
					*/}
				
			</div>
		)
	}
}
export default UserAdd;