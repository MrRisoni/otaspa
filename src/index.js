import React from 'react';
import ReactDOM from 'react-dom';
import ReduxApp from './ReduxApp';
import './index.css';
import { Provider } from 'react-redux';
import { createStore  } from 'redux';


import  * as ReduxActions from './redux_actions';

import OtaSpaApp from './reducers';

let store = createStore(OtaSpaApp);


store.dispatch(ReduxActions.getUpsales());
store.dispatch(ReduxActions.getItinerary());
store.dispatch(ReduxActions.getPassengerCount());
store.dispatch(ReduxActions.getBaggages());


ReactDOM.render(
    <Provider store={store}>
        <ReduxApp />
    </Provider>,
      document.getElementById('root')
);