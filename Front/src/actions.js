import dispatcher from "./dispatcher";


export function getItinerary() {
    return {
        type: "GET_ITINERARY",
        payload : [
            { from : 'ATH', to : 'MUC'} ,  { from : 'ATH', to : 'MUC'}
        ]
    }
}
