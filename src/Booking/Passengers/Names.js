import React, {Component} from 'react';
import {inject} from 'mobx-react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import ValidatePassengers from './ValidatePassengers';

import Error from '../../Error';

import 'react-datepicker/dist/react-datepicker.css';

@inject('otastore')
class Names extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            name: '',
            dob: moment(),
            showSurnameErr: false,
            showNameErr: false

        };


        this.changeGender = this.changeGender.bind(this);
        this.editSurname = this.editSurname.bind(this);
        this.editName = this.editName.bind(this);
        this.changeDOB = this.changeDOB.bind(this);

    }

    changeGender()
    {

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
                    id: this.props.pap_id
                });


            this.setState({
                showSurnameErr: false
            });

        }
        else{
            this.setState({
                showSurnameErr: true
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
                    id: this.props.pap_id
                });

            this.setState({
                showNameErr: false
            });

        }
        else{
            this.setState({
                showNameErr: true
            });
        }
    }

    render() {
        const messages = require('../../messages');
        return (
            <div>
                <div className="row">


                    <div className="col-md-3">
                        <select className="form-control">
                            <option value="">Gender</option>
                            <option value="MR">Male</option>
                            <option value="MS">Female</option>
                        </select>
                    </div>


                    <div className="col-md-5">
                        <input type="text" placeholder="Surname"
                               id={`#paxSurname${this.props.pap_id}`}
                               value={this.state.surname}
                               onChange={this.editSurname} className="form-control"/>
                        <Error show={this.state.showSurnameErr}
                               class={"textInputErr"}
                               msg={messages.LETTERS_ONLY}/>
                    </div>


                    <div className="col-md-3">
                        <input type="text" placeholder="Name" id={`#paxName${this.props.pap_id}`}
                               value={this.state.name}
                               onChange={this.editName} className="form-control"/>
                        <Error show={this.state.showNameErr}
                               class={"textInputErr"}
                               msg={messages.LETTERS_ONLY}/>
                    </div>

                </div>

                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="birthday">BirthDate</label>
                        <DatePicker className="form-control"
                                    dateFormat="DD/MM/YYYY"
                                    selected={this.state.dob}
                                    onChange={this.changeDOB}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Names;
