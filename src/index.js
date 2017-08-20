import React from 'react';
import ReactDOM from 'react-dom';
import BookApp from './BookApp';

import {Provider} from 'mobx-react';
import './index.css';

import otastore from './store';


ReactDOM.render(
    <Provider otastore={otastore}>
        <BookApp />
    </Provider>
, document.getElementById('root'));
