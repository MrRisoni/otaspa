import React, {Component} from 'react';
import {inject} from 'mobx-react';

import Bags from './Bags/Bags';
import BrandedFare from './BrandedFares/BrandedFare';

@inject('otastore')
class PassengerUpsale extends Component {

    render() {
        return (

            <div className="row passengerUpsaleCompo">
                <div className="col-md-12">

                    <div className="card bg-light">
                        <div className="card-header">

                            <div className="row">

                                <div className="col-md-5">
                                    Passenger # {this.props.pap.humanID}

                                    {this.props.pap.surname}
                                </div>

                            </div>



                             <BrandedFare  passengerid={this.props.pap.id}/>

                            <Bags passengerid={this.props.pap.id}/>



                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default PassengerUpsale;

