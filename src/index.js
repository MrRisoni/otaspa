import React from 'react';
import ReactDOM from 'react-dom';
import BookApp from './BookApp';

import {Provider} from 'react-redux';
import { createStore } from 'redux'
import OtaSpaReduxApp from './reducers/index'


const initState = {
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
