import React, {Component} from 'react';

import Contact from './Contact';
import Pay from './Pay';
import PriceBox from '../Booking/PriceBox';


class Payment extends Component {

    render() {
        return (
            <div className="row  justify-content-center">

                <div className="col-6">
                    <Contact/>
                    <Pay/>
                </div>

                <div className="col-4">
                    <PriceBox/>
                </div>

            </div>
        )
    }
}

export default Payment;