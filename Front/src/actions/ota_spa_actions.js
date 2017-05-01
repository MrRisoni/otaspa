import dispatcher from "../dispatcher";

export function boughtUpsale(id) {
    dispatcher.dispatch({
        type: "BOUGHT_UPSALE",
        id
    });
}