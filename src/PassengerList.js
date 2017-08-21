import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import Passenger from './Passenger/Passenger';

@inject('otastore')
@observer
class PassengerList extends Component {
    constructor(props) {
        super(props);

        this.addPassenger = this.addPassenger.bind(this);
    }

    addPassenger() {
        this.props.otastore.addPassenger();
    }

    render() {

        return (
            <div className="row">

                <div className="col-md-12">


                    <div className="row">

                        <div className="col-md-12">


                            {this.props.otastore.passengers.map((ps) => {
                                if (ps.active) {
                                    return (<Passenger pap={ps}/>)
                                }
                            })}

                        </div>
                    </div>


                    {this.props.otastore.reasonPassengers !== '' &&
                        <div className="row">
                            <div className="col-md-12">
                                <div className="alert alert-danger" role="alert">
                                    {this.props.otastore.reasonPassengers}
                                </div>
                            </div>
                        </div>
                        }


                        <div className="row">
                            <div className="col-md-5">
                                <button className="btn btn-primary btn-success" onClick={this.addPassenger}>Add Passenger
                                </button>
                            </div>
                        </div>

                </div>

            </div>);
    }
}

export default PassengerList;


