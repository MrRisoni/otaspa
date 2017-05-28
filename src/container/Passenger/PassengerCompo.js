import React, {Component} from 'react';


import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import Baggages from './Baggages/Baggage';

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
                dob: ''
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
                    <div className="panel-heading">Passenger # {this.props.id} </div>
                    <div className="panel-body">




                        <Baggages />


                    </div>
                </div>
            </div>
        </div>)
    }
}

export default PassengerCompo;