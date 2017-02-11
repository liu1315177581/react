import { combineReducers } from 'redux';

      	const podata = [
				  {
				    text: 'Eat food',
				    completed: true
				  }, {
				    text: 'Exercise',
				    completed: false
				  }
				]


const addcp = (state = [], action) => {
  
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return (
          podata.map((indexs,addcp)=>{
            return indexs.text
          })
      	)
    default:
      return state
  }
  
};



const addcpp = (state = "花花",action) => {
	switch (action.type) {
    case 'INCREMENT_COUNTERA':
      return (
          state = action.text
      )
    default:
      return state
  }
}

const todoApp = combineReducers({
  addcpp,
  addcp
})

export default todoApp