import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router, Route } from 'react-router';
import './index.css';


import BookApp from './Booking/BookApp';
import SearchBundle from './Booking/Search/SearchBundle';
import Login from './Manage/Login';



import OtaStore from './store';

const otastore = new OtaStore();

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
    // Key can be whatever you want
    routing: routingStore,
    otastore : otastore
    // ...other stores
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={SearchBundle}/>
                <Route exact path="/book" component={BookApp}/>
                <Route exact path="/manage" component={Login}/>

            </div>
        </Router>
    </Provider>
, document.getElementById('root'));
