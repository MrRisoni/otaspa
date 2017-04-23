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

        this.updateMeals = this.updateMeals.bind(this);

    }

    updateMeals(meal_type_id, meal_id)
    {
        var self = this;
        console.log('Update Meals ' + meal_type_id + ' ' + meal_id);
        let previous_upsales = self.state.upsales;

        previous_upsales.meals.appetizer = meal_id;

        self.setState({ upsales : previous_upsales});


        this.props.updatePassengers(self.state);
    }


    componentDidMount() {

    }

    render() {
        return (<div className="row">
            <div className="col-md-10">

                <div className="panel panel-default">
                    <div className="panel-heading">Passenger Component</div>
                    <div className="panel-body">


                        <Names/>
                        <Passport/>
                        <Baggages/>
                        <Insurance/>


                        <Meals data={this.props.meals} papID={this.state.passengerID} mealUpdate={this.updateMeals}/>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default PassengerCompo;