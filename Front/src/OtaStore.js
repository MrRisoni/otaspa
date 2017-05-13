import { EventEmitter } from "events";

import dispatcher from "./dispatcher";

class OtaStore extends EventEmitter {
    constructor() {
        super();
        this.itinerary = {
            aller : '',
            retour : ''
        };
    }


    handleActions(action) {
        switch(action.type) {
            case "GET_ITINERARY": {
                console.log('get itinerary store');
                this.itinerary.aller = action.aller;
                this.itinerary.retour = action.retour;
                this.itinerary.info = action.info;
                this.emit("change");
                break;
            }
        }
    }

    getItinerary()
    {
        return this.itinerary;
    }

}

const otastore = new OtaStore;
dispatcher.register(otastore.handleActions.bind(otastore));

export default otastore;