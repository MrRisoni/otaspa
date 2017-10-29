import React, {Component} from 'react';
import {inject} from 'mobx-react';

import Insurance from './Insurance';
import Bags from './Bags/Bags';
import BrandedFare from './BrandedFares/BrandedFare';

@inject('otastore')
class PassengerUpsale extends Component {

    render() {
        return (

            <div className="card bg-light">
                <div className="card-header">

                    <div className="row">

                        <div className="col-md-5">
                            Passenger # {this.props.pap.humanID}

                            {this.props.pap.surname}
                        </div>

                        {this.props.pap.surname}


                        <Insurance  passengerid={this.props.pap.id}/>

                        <BrandedFare  passengerid={this.props.pap.id}/>

                        <Bags passengerid={this.props.pap.id}/>


                    </div>
                </div>
            </div>




        );
    }
}

export default PassengerUpsale;

