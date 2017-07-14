import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import './index.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import Results from './ResultPage/Results';



ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/search/:product" component={Results} />

    </Router>
), document.getElementById('root'));
