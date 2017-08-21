import React, {Component} from 'react';


import PriceBox from './PriceBox';
import PassengerList from './PassengerList';
import Contact from './Contact';
import Pay from './Pay';


class BookApp extends Component {

    render() {
        return (

            <div className="row">

                <div className="col-md-8">

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


