import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import './index.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
    </Router>
), document.getElementById('root'));
