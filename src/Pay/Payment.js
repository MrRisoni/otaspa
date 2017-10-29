import React, {Component} from 'react';

import Contact from './Contact';
import Pay from './Pay';
import PriceBox from '../Booking/SideBar';


class Payment extends Component {

    render() {
        return (

            <div className="row">

                <div className="col-md-1"></div>

                <div className="col-md-6">
                    <Contact/>
                    <Pay/>
                </div>

                <div className="col-md-4">
                    <PriceBox/>
                </div>

            </div>
        )
    }
}

export default Payment;