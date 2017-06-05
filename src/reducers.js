import { combineReducers } from 'redux'


function spa(state = {}, action) {
    switch (action.type) {
        case "GET_UPSALES":
            return Object.assign({} ,state , {upsales :  action.payload});
        case "GET_ITINERARY":
            return Object.assign({}, state, {itinerary : action.payload});
        case "GET_PAPCOUNT":
            return Object.assign({}, state, { pap_types : action.payload});
        default:
            return state
    }
}



const OtaSpaApp = combineReducers({
    spa
});

export default OtaSpaApp