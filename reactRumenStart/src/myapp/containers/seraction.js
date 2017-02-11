import fetch from 'isomorphic-fetch'  //处理ajax 如不懂 请百度

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SWITCH_SUPPORT = 'SWITCH_SUPPORT'


export function addTodo(text) { 
  return { 
  	type: ADD_TODO, 
  	isMarked:text
  }
}


export function addremoves() { 
  return { 
    type: COMPLETE_TODO, 
    text:'宣善波'
  }
}

export function myservers(){
  return dispatch=>{
    fetch('https://cnodejs.org/api/v1/topics')
      .then(response => response.json())
      .then(data =>{
          dispatch({
             type:SWITCH_SUPPORT,
             servers:data
          })
          }
        ) 
   }
}


export const VisibilityFilters = [
      {
          title: '全部', 
          filter: 'all',
      },
      {
          title: '精华',
          filter: 'good',
      },
      {
          title: '分享',
          filter: 'share',
      },
      {
          title: '问答',
          filter: 'ask',
      },
      {
          title: '招聘',
          filter: 'job',
      }
  ]



export const Myremove = [
      {
          title: '中国', 
          filter: '1',
      },
      {
          title: '美国',
          filter: '2',
      },
      {
          title: '英国',
          filter: '3',
      },
      {
          title: '俄罗斯',
          filter: '4',
      },
      {
          title: '法国',
          filter: '5',
      }
]



