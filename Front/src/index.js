import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import App from './App';
import './index.css';


let apiURL = 'http://localhost:3500';


render((
    <Router history={hashHistory}>
        <Route path="/" component={() => <App lang="en" apiURL={apiURL}/>} />
    </Router>
) ,document.getElementById('root'));