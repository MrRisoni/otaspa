import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import Passenger from './Passenger';

@inject('otaStore')
@observer
class PassengerList extends Component {
    constructor(props) {
        super(props);

        this.addPassenger = this.addPassenger.bind(this);
    }

    addPassenger() {
        this.props.otaStore.addPassenger();
    }

    render() {

        let passengerDiv = [];

        let countriesList = [];

        this.props.otaStore.countries.forEach((country) => {
            countriesList.push(<option key={country.code} value={country.code}>{country.name}</option>);
        });


        this.props.otaStore.passengers.forEach((ps) => {
            if (ps.active) {
                passengerDiv.push(<Passenger key={ps.id}
                                             pap={ps}
                                             countriesList={countriesList}/>)
            }
        });

        return (
            <div className="row show" id="passengerListCollapse">

                <div className="col-md-12">


                    <div className="row">

                        <div className="col-md-12">

                            {passengerDiv}

                        </div>
                    </div>


                    {this.props.otaStore.reasonPassengers !== '' &&
                        <div className="row">
                            <div className="col-md-12">
                                <div className="alert alert-danger" role="alert">
                                    {this.props.otaStore.reasonPassengers}
                                </div>
                            </div>
                        </div>
                        }


                    <div className="addOnePassenger">
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                <button className="btn btn-primary btn-success" onClick={this.addPassenger}>Add
                                    Passenger
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>);
    }
}

export default PassengerList;


