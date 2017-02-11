import React, { Component, PropTypes } from 'react';


class boxs extends Component{

  render(){
    const {onIncrement,onIncrements,counter,doemvalue,mast,onetiome} = this.props;
    
     return(
          <div>
          <div>{counter.map((dom,i)=>{
            return(
              <p key = {i}>{dom}</p>
              )
          })}
          </div>
          <button style={{background:'red'}} onClick={onIncrement}>+</button>
          <button onClick={onIncrements}>-</button>
          <input type="text"/ >
          
          <button onClick={onetiome}>add</button>
          <p>{doemvalue}123</p>
        </div>
      )
  }

}


export default boxs