import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import AirApp from './BookApps/AirApp';
import ShipApp from './BookApps/ShipApp';
import CarApp from './BookApps/CarApp';
import HotelApp from './BookApps/HotelApp';
import Success from './BookApps/Success';


import './index.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import SearchPage from './ResultPage/SearchPage';


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/search/:product" component={SearchPage} />
        <Route path="/book/air" component={AirApp} />
        <Route path="/book/ship" component={ShipApp} />
        <Route path="/book/hotel" component={HotelApp} />
        <Route path="/book/car" component={CarApp} />
        <Route path="/book/success" component={Success} />

    </Router>
), document.getElementById('root'));
