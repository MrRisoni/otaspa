import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'mobx-react';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';
import {Router, Route} from 'react-router';
import './index.css';

import BookApp from './Booking/PassengerPage';
import SearchBundle from './Booking/Search/SearchBundle';
import PaymentPage from './Pay/PaymentPage';
import Upsales from './UpsalesPage/Upsales';
import FinalPage from './Final/FinalPage';


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
    otaStore: otastore,
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
                <Route exact path="/pay" component={PaymentPage}/>
                <Route exact path="/final" component={FinalPage}/>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
