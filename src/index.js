import React from 'react';
import ReactDOM from 'react-dom';
import BookApp from './BookApp';

import { createStore } from 'redux'
import OtaSpaReduxApp from './reducers/index'


import state from './state'


const store = createStore(OtaSpaReduxApp, state);


import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <BookApp />
    </Provider>
, document.getElementById('root'));
