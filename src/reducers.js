import { combineReducers } from 'redux'



const initialState = {
    visibilityFilter: 0,
    todos: [],
    priceBox : {
        total : 0,
        upsales : []
    }
};

function spa(state = initialState, action) {
    switch (action.type) {
        case "GET_ITINERARY":
            return Object.assign({}, state, {itinerary : action.payload});
        case "GET_PAPCOUNT":
            return Object.assign({}, state, { pap_types : action.payload});
        case "GET_BAGGAGES":
            return Object.assign({}, state, { baggages : action.payload});


        default:
            return state
    }
}



const OtaSpaApp = combineReducers({
    spa
});

export default OtaSpaApp