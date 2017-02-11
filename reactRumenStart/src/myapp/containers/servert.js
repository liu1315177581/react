import {combineReducers} from 'redux' //数据合并
import {ADD_TODO,VisibilityFilters,Myremove,SWITCH_SUPPORT,COMPLETE_TODO} from './seraction'


function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case ADD_TODO:
      return action.isMarked
    default:
      return state
  }
}

const addcpp = (state = VisibilityFilters,action) => {
	switch (action.type) {
    case COMPLETE_TODO:
      return {
          ...state,
          state : action.text
      }
    default:
      return state
  }
}



const Myremoves =(state = Myremove,action)=>{
  switch(action.type){
    default:
      return state
  }
}

const myserveradd = (state ='',action)=>{
  switch (action.type) {
    case SWITCH_SUPPORT:
     return action.servers
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  addcpp,
  Myremoves,
  myserveradd
})

export default todoApp

