import React,{ Component } from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

const ParamExample = () =>(
  <Router>
    <div>
      <h2>账号</h2>
      <ul>
        <li><Link to="/aaa">react-Router</Link></li>
        <li><Link to="/leoashin">leoashin</Link></li>
        <li><Link to="/justjavac">justjavac</Link></li>
        <li><Link to="/reacttraining">reacttraining</Link></li>
      </ul>
      <Route path='/:id' component={Child}/>
    </div>
  </Router>
)
const Child = ({match})=>(
  <div>
    <h3>ID：{match.params.id}</h3>
  </div>
)

export default ParamExample