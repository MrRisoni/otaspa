import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'mobx-react';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';
import {Router, Route} from 'react-router';
import './index.css';

import BookApp from './Booking/PassengerPage';
import SearchBundle from './Booking/Search/SearchBundle';
import Payment from './Pay/Payment';
import Upsales from './Upsales/Upsales';


import OtaStore from './stores/OtaStore';
import ItineraryStore from './stores/ItineraryStore';
import HtmlStore from './stores/HtmlStore';

const otastore = new OtaStore();
const itinerary_store = new ItineraryStore();
const htmlstore = new HtmlStore();

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
    routing: routingStore,
    otastore: otastore,
    ItineraryStore: itinerary_store,
    htmlStore : htmlstore
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={SearchBundle}/>
                <Route exact path="/passengers" component={BookApp}/>
                <Route exact path="/upsales" component={Upsales}/>
                <Route exact path="/preseat" component={Upsales}/>
                <Route exact path="/pay" component={Payment}/>
                <Route exact path="/final" component={BookApp}/>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
