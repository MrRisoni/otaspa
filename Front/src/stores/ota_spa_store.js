import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class OTA_SPA_STORE extends EventEmitter {
    constructor() {
        super();
        this.baseEndPoint = 'http://localhost:8000';
        this.upsales = [
            {
                id: 1,
                title: "SMS",
                selected: false,
                price: 4
            }
        ];

        this.loadedUpsales = 0;
        this.priceDifference = false;
        this.totalPrice = 0;
        this.pricing = {};
        this.passengers = [];
        this.meals = {
            appetizers: [],
            mains: [],
            desserts: [],
            drinks: []
        };
        this.buggages = [];
        this.buggageData = [];
        this.hotelData = [
            {
                id: 0,
                title: 'Mirabel',
                info: '',
                totalPrice: 86.5
            }, {
                id: 1,
                title: 'Overlook',
                info: '',
                totalPrice: 145.5
            }, {
                id: 2,
                title: 'Miramare',
                info: '',
                totalPrice: 286.5
            }
        ];


    }

    selectedUpsale(id) {
        console.log('Global store ' + id);
    }

    getStoreUpsales() {
        console.log('Store getStoreUpsales');
        return this.upsales;
    }


    handleActions(action) {
        console.log('Store received');
        console.log(action);
        switch (action.type) {
            case "GET_DB_UPSALES":
                console.log('Handle action GET_DB_UPSALES');
                this.upsales = action.upsales;
                console.log(this.upsales);
                this.emit("change");
                break;

        }
    }
}

const OtaSpaStore = new OTA_SPA_STORE();
dispatcher.register(OtaSpaStore.handleActions.bind(OtaSpaStore));

export  default OtaSpaStore