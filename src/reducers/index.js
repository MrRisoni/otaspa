import { combineReducers } from 'redux'



function currencyChanged(state = {}, action) {
    switch (action.type) {
        case 'SELECT_CURRENCY':
            return  Object.assign({}, state, { currency: action.payload})
        default:
            return state
    }
}


const OtaSpaReduxApp = combineReducers({
    currencyChanged
})
