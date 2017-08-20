import { combineReducers } from 'redux'



function selectedCurrency(state = 'EUR', action) {
    switch (action.type) {
        case 'SELECT_CURRENCY':
           // return  Object.assign({}, state, { currency: action.payload})
          return action.payload;
        default:
            return state
    }
}



function paxTypes(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}



const OtaSpaReduxApp = combineReducers({
    selectedCurrency,
    paxTypes
})


export default OtaSpaReduxApp