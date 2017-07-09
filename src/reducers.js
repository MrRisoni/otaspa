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
        case "BUY_UPSALE":
            let previousUpsales = state.priceBox.upsales;
            console.log('reducers');
            console.log(action.payload);

            var total = 0;
            console.log('previous upsales');
            console.log(previousUpsales);
            previousUpsales.forEach( function (upsl) {
                if (upsl.id === action.payload.id) {
                    upsl.selected = action.payload.selected;
                }

                if (upsl.selected) {
                    total += upsl.price;
                }

            });

            let priceBox = state.priceBox;
            priceBox.upsales =previousUpsales;




            priceBox.total =total;

            console.log(priceBox);
            return Object.assign({}, state, { priceBox : priceBox});


        default:
            return state
    }
}



const OtaSpaApp = combineReducers({
    spa
});

export default OtaSpaApp