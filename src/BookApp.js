import React, {Component} from 'react';


import PriceBox from './PriceBox';
import PassengerList from './PassengerList';

class BookApp extends Component {

    render() {
        return (

            <div className="row">

                <div className="col-md-8">

                    <PassengerList/>

                </div>


                <div className="col-md-4">
                    <PriceBox/>
                </div>

            </div>

        );
    }
}

export default BookApp;


