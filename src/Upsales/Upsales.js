import React, {Component} from 'react';

import PriceBox from '../Booking/SideBar';
import Preseat from "./Preseat/Preseat";
import PassengerUpsaleList from './PassengerUpsaleList';


class Upsales extends Component {

    render() {
        return (

            <div className="row">

                <div className="col-md-1"></div>

                <div className="col-md-6">
                    <PassengerUpsaleList/>

                </div>

                <div className="col-md-4">
                    <PriceBox/>
                </div>

            </div>
        )
    }
}

export default Upsales;