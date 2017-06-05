import React, {Component} from 'react';
import {connect} from 'react-redux';


import Names from './Personal/Names';
import Passport from "./Personal/Passport";
import BaggageList from './Baggages/BaggageList';
import FarePanel from './UpgradeFare/FarePanel';
import  InsurancePanel from './Insurance/InsurancePanel';


class PassengerCompo extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        return (<div className="row">
            <div className="col-md-10">

                <div className="panel panel-default">
                    <div className="panel-heading">Passenger # {this.props.id} </div>
                    <div className="panel-body">


                        <Names/>
                        <Passport/>
                        <BaggageList />
                        <InsurancePanel/>
                        <FarePanel/>

                    </div>
                </div>
            </div>
        </div>)
    }
}

export default PassengerCompo;