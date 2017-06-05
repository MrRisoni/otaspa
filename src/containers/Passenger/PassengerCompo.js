import React, {Component} from 'react';


import Baggages from './Baggages/Baggage';
import FarePanel from './UpgradeFare/FarePanel';
import  InsurancePanel from './Insurance/InsurancePanel';
import Names from './Personal/Names';
import Passport from "./Personal/Passport";

class PassengerCompo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passengerID : 0,
            personal: {
                gender: 0,
                type: 0,
                name: '',
                surname: '',
                dob: '',
                fullname : ''
            },
            passport: {
                issueCountry: [],
                id: '',
                isueDate: '',
                expDate: ''
            },
            upsales: {
                price: 0,
                buggageDep: 0,
                buggageRet: 0,
                insurance: 0,
                meals: {
                    appetizer: 0,
                    main: 0,
                    dessert: 0,
                    drink: 0
                }
            }
        };


    }




    componentDidMount() {

    }

    render() {
        return (<div className="row">
            <div className="col-md-10">

                <div className="panel panel-default">
                    <div className="panel-heading">Passenger # {this.props.id} {this.state.personal.fullname}</div>
                    <div className="panel-body">


                        <Names/>

                        <Passport/>


                        <InsurancePanel/>

                        <Baggages />

                        <FarePanel/>



                    </div>
                </div>
            </div>
        </div>)
    }
}

export default PassengerCompo;