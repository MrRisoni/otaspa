import dispatcher from "./dispatcher";


export function getItinerary() {
    dispatcher.dispatch({
        type: "GET_ITINERARY",
        aller: { from : 'ATH', to : 'MUC'} ,
        retour : { from : 'ATH', to : 'MUC'}
    });
}