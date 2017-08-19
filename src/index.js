import React from 'react';
import ReactDOM from 'react-dom';
import BookApp from './BookApp';

import { createStore } from 'redux'

const store = createStore({});
import './index.css';


ReactDOM.render(
    <BookApp/>
, document.getElementById('root'));
