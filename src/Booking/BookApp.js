import React, {Component} from 'react';


import PriceBox from './PriceBox';
import PassengerList from './PassengerList';
import Contact from '../Pay/Contact';
import Pay from '../Pay/Pay';
import Itinerary from './Itinerary/Itinerary';


class BookApp extends Component {

    render() {
        return (

            <div className="row">

                <div className="col-md-8">

                    <Itinerary/>

                    <PassengerList/>

                    <Contact/>

                    <Pay/>

                </div>


                <div className="col-md-4">
                    <PriceBox/>
                </div>

            </div>

        );
    }
}

export default BookApp;


