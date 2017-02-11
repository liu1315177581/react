import { combineReducers } from 'redux'
import { ADD_TODO,VisibilityFilters,Myremove,SWITCH_SUPPORT,COMPLETE_TODO } from './seraction'

function VisibilityFilter(state="SHOW_ALL",action){
	switch (action.type){
		case ADD_TODO:
			return action.isMarked
		default:
			return state
	}
}
function addcpp(state = VisibilityFilters,action){
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
function Myremoves(state=Myremove,action){
	switch(action.type){
		default:
			return state
	}
}
function myserversadd(state="",aciton){
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
	Myremoves,
	myserversadd
})
export default todoApp