import React, {Component} from 'react';

import SelectBox from '../SelectBox';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import Names from './Names';
import Passport from './Passport';
import Baggages from './Baggages';
import Insurance from './Insurance';
import Meals from './Meals';

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

    componentDidMount()
    {

    }

    render() {
        return (<div className="row">
            <div className="col-md-12">
                Passenger Component

                <Names/>
                <Passport/>
                <Baggages/>
                <Insurance/>


                <Meals data={this.props.meals}/>

            </div>
        </div>)
    }
}

export default PassengerCompo;