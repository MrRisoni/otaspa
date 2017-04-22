import React, {Component} from 'react';

import SelectBox from '../SelectBox';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';



class PassengerCompo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="row">
            <div className="col-md-12">
                Passenger Component


            </div>
        </div>)
    }
}

export default PassengerCompo;