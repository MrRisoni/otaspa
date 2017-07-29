import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import AirApp from './BookApps/AirApp';


import './index.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import SearchPage from './ResultPage/SearchPage';


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/search/:product" component={SearchPage} />
        <Route path="/book/air" component={AirApp} />

    </Router>
), document.getElementById('root'));
