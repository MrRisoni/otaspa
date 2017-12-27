import React, {Component} from 'react';
import {inject} from 'mobx-react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import ValidatePassengers from './ValidatePassengers';


import 'react-datepicker/dist/react-datepicker.css';

@inject('otastore')
class Names extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            name: '',
            dob: moment()
        };


        this.changeGender = this.changeGender.bind(this);
        this.removeMe = this.removeMe.bind(this);
        this.editSurname = this.editSurname.bind(this);
        this.editName = this.editName.bind(this);

        this.changeDOB = this.changeDOB.bind(this);


    }



    changeDOB(date) {
        console.log(date);
        this.setState({
            dob: date
        });
    }




    editSurname(ev) {
        const fieldInput = ev.target.value.toUpperCase();

        this.setState({surname: fieldInput});

        const VP = new ValidatePassengers();

        if (VP.validateNameSurname(fieldInput)) {

            this.props.otastore.editPaxElement(
                {
                    value: fieldInput,
                    property: 'surname',
                    id: this.props.pap.id
                });

        }

    }


    editName(ev) {
        const fieldInput = ev.target.value.toUpperCase();

        this.setState({name: fieldInput});


        const VP = new ValidatePassengers();

        if (VP.validateNameSurname(fieldInput)) {

            this.props.otastore.editPaxElement(
                {
                    value: fieldInput,
                    property: 'name',
                    id: this.props.pap.id
                });

        }
    }

    render()
    {

        return(<div>sdsds</div>)
    }
}

export default Names;
