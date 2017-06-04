import React from 'react';
import ReactDOM from 'react-dom';
import ReduxApp from './ReduxApp';
import './index.css';


import { createStore } from 'redux'
import OtaSpaApp from './reducers'
let store = createStore(OtaSpaApp);

import {getUpsales} from './redux_actions';

ReactDOM.render(
     <ReduxApp/>,
      document.getElementById('root')
    );