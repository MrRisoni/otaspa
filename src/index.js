import React from 'react';
import ReactDOM from 'react-dom';
import ReduxApp from './ReduxApp';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { getUpsales } from './redux_actions';

import OtaSpaApp from './reducers'
let store = createStore(OtaSpaApp);

store.dispatch(getUpsales());

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <ReduxApp />
    </Provider>,
      document.getElementById('root')
);