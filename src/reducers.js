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
        case "GET_UPSALES":
            return Object.assign({} ,state , {upsales :  action.payload});
        case "GET_ITINERARY":
            return Object.assign({}, state, {itinerary : action.payload});
        case "GET_PAPCOUNT":
            return Object.assign({}, state, { pap_types : action.payload});
        case "GET_BAGGAGES":
            return Object.assign({}, state, { baggages : action.payload});
        case "BUY_UPSALE":
            let previousUpsales = state.priceBox.upsales;
            console.log(action.payload);

            if (action.payload.selected) {
                previousUpsales.push(action.payload.id);
            }

            let priceBox = state.priceBox;
            priceBox.upsales =previousUpsales;

            return Object.assign({}, state, { priceBox : priceBox});


        default:
            return state
    }
}



const OtaSpaApp = combineReducers({
    spa
});

export default OtaSpaApp