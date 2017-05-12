import { EventEmitter } from "events";

import dispatcher from "./dispatcher";

class OtaStore extends EventEmitter {
    constructor() {
        super();
        this.itineray = [];
    }


    handleActions(action) {
        switch(action.type) {
            case "GET_ITINERARY": {
                this.itineray = action.payload;
                this.emit("change");
                break;
            }
        }
    }

}

const otastore = new OtaStore;
dispatcher.register(otastore.handleActions.bind(otastore));

export default otastore;