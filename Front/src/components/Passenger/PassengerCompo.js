import React, {Component} from 'react';

import SelectBox from '../SelectBox';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import Names from './Names';


class PassengerCompo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personal : {
                gender : 0,
                type: 0,
                name : '',
                surname: '',
                dob: ''
            },
            passport : {
                issueCountry : [],
                id: '',
                isueDate : '',
                expDate:''
            },
            upsales: {
                price : 0,
                buggageDep :0,
                buggageRet :0,
                insurance : 0,
                meals : {
                    appetizer: 0,
                    main: 0,
                    dessert:0,
                    drink:0
                }
            }
        }
    }

    render() {
        return (<div className="row">
            <div className="col-md-12">
                Passenger Component

                <Names/>
            </div>
        </div>)
    }
}

export default PassengerCompo;