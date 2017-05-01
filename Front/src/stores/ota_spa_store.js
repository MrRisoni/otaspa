import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';


class OTA_SPA_STORE extends EventEmitter {
    constructor() {
        super();
        this.upsales = [
            {
                id: 1,
                title: 'Check-in',
                price: 3
            },
            {
                id: 2,
                text: 'SMS',
                price: 1.5
            },
        ];
    }

    selectedUpsale(id)
    {
        console.log('Global store ' + id);
    }
    getStoreUpsales()
    {
        return this.upsales;
    }


    handleActions(action)
    {
        console.log('Store received ' + action);
        console.log(action);
    }
}

const OtaSpaStore = new OTA_SPA_STORE;
dispatcher.register(OtaSpaStore.handleActions.bind(OtaSpaStore));

export  default OtaSpaStore