import { EventEmitter } from "events";

import dispatcher from "./dispatcher";




class OtaStore extends EventEmitter {
    constructor() {
        super();
        this.itinerary = {
            aller : '',
            retour : ''
        };

        this.priceAnalysis = {
            total: 0,
            upsales : []
        };

        this.upsales = [];
    }


    handleActions(action) {
        switch(action.type) {
            case "CHECKED_UPSALE": {
                console.log('store received CHECKED_UPSALE');
                let selectedUpsales = [];
                this.upsales.forEach( (upsl) => {
                   if (upsl.id === action.payload.id) {
                       upsl.selected = action.payload.selected;
                       selectedUpsales.push(upsl);
                       this.priceAnalysis.total += upsl.price;

                   }
                });
                this.priceAnalysis.upsales = selectedUpsales;
                this.emit("change");

                break;
            }
            case "GET_ITINERARY": {
                console.log('get itinerary store');
                this.itinerary.aller = action.aller;
                this.itinerary.retour = action.retour;
                this.itinerary.info = action.info;
                this.emit("change");
                break;
            }
            case "GET_UPSALES": {
                this.upsales = action.payload;
                break;
            }
        }
    }

    getItinerary()
    {
        return this.itinerary;
    }

    getPricing()
    {
        return this.priceAnalysis;
    }

    getUpsales()
    {
        return this.upsales;
    }
}

const otastore = new OtaStore;
dispatcher.register(otastore.handleActions.bind(otastore));

export default otastore;