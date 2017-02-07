import { combineReducers } from 'redux'
import { ADD_TODO,VisibilityFilters,Myremove,SWITCH_SUPPORT,COMPLETE_TODO } from './seraction'

const VisibilityFilter(state="SHOW_ALL",action){
	switch (action.type){
		case ADD_TODO:
			return action.isMarked
		default:
			return state
	}
}
const addcpp = (state = VisibilityFilters,action)=>{
	switch (action.type){
		case COMPLETE_TODO:
			return{
				...state,
				state:action.text
			}
			default:
				return state
	}
}
const Myremove = (state=Myremove,action)=>{
	switch(action.type){
		default:
			return state
	}
}
const myserversadd = (state="",aciton)=>{
	switch(action.type){
		case SWITCH_SUPPORT:
			return action.servers
		default:
			return state
	}
}
const todoApp = combineReducers({
	VisibilityFilter,
	addcpp,
	Myremove,
	myserversadd
})
export default todoApp