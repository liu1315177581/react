import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { Link} from 'react-router';
import only from './mystyle/only.scss'
import styles from './mystyle/tow.scss'


 const AddTodo = ({lost,myclick}) =>(
       <button onClick={myclick} className={styles.onebuton}>{lost}</button>
 )


export default AddTodo