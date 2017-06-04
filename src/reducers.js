import { combineReducers } from 'redux'


function spa(state = {}, action) {
    switch (action.type) {
        case "GET_UPSALES":
            return Object.assign({} ,state , {upsales :  action.payload});

        default:
            return state
    }
}



const OtaSpaApp = combineReducers({
    spa
});

export default OtaSpaApp