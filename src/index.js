import React from 'react';
import ReactDOM from 'react-dom';
import BookApp from './BookApp';

import {Provider} from 'react-redux';
import { createStore } from 'redux'
import OtaSpaReduxApp from './reducers/index'


const initState = {
    currencyData: [
        {
            trigram: 'EUR',
            rate: 1
        },
        {
            trigram: 'USD',
            rate: 1.17
        },
        {
            trigram: 'CHF',
            rate: 1.14
        },
        {
            trigram: 'GBP',
            rate: 0.90
        },
        {
            trigram: 'DKK',
            rate: 7.43
        }
    ],
    paxTypes: [
        {
            type: 'ADT',
            name: 'Adults',
            count: 2,
            netPrice: 356,
            convertedPrice: 356

        },
        {
            type: 'CNN',
            name: 'Children',
            count: 1,
            netPrice: 275,
            convertedPrice: 275

        },
        {
            type: 'INF',
            name: 'Infant',
            count: 0,
            netPrice: 164,
            convertedPrice: 164
        }
    ]
};

const store = createStore(OtaSpaReduxApp, initState);

console.log(store.getState());

import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <BookApp />
    </Provider>
, document.getElementById('root'));
