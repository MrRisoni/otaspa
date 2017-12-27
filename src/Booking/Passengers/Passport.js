import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {inject} from "mobx-react/index";

import ValidatePassengers from './ValidatePassengers';


@inject('otastore')
class Passport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expires: moment()
        };


        this.editPassport = this.editPassport.bind(this);
        this.changeNation = this.changeNation.bind(this);
        this.changeIssue = this.changeIssue.bind(this);
        this.changeExpiry = this.changeExpiry.bind(this);
    }


    editPassport(ev) {
        const fieldInput = ev.target.value.toUpperCase();
        console.log(ev.target.value);

        this.props.otastore.editPaxElement(
            {
                value: fieldInput,
                property: 'passport',
                id: this.props.pap.id
            });

    }


    changeNation(ev) {
        const fieldInput = ev.target.value.toUpperCase();
        console.log(fieldInput);

        this.props.otastore.editPaxElement(
            {
                value: fieldInput,
                property: 'nationality',
                id: this.props.pap.id
            });

    }


    changeExpiry(date)
    {
        this.setState({
            expires: date
        });
    }



    changeIssue(ev) {
        const fieldInput = ev.target.value.toUpperCase();
        console.log(fieldInput);

        this.props.otastore.editPaxElement(
            {
                value: fieldInput,
                property: 'issue',
                id: this.props.pap.id
            });
    }


    render() {
        return (
            <div>
                <button className="btn btn-primary" type="button" data-toggle="collapse"
                        data-target=".collapsePassports" aria-expanded="false" aria-controls="collapsePassports">
                    Add Passports after the booking
                </button>

                <div className="collapsePassports">

                    <br/>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="birthday">Nationality</label>
                            <select className="form-control" onChange={this.changeNation}>
                                <option key="" value="">Nationality</option>
                                {this.props.countriesList}
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="birthday">Issuing Country</label>
                            <select className="form-control" onChange={this.changeIssue}>
                                <option key="" value="">Issue Country</option>
                                {this.props.countriesList}
                            </select>
                        </div>
                    </div>


                    <br/>
                    <div className="row">

                        <div className="col-md-6">
                            <label htmlFor="birthday">Passport No</label>
                            <input type="text" placeholder="Passport No"
                                   onChange={this.editPassport}
                                   className="form-control"/>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="birthday">Expiration Date</label>
                            <DatePicker className="form-control"
                                        dateFormat="DD/MM/YYYY"
                                        selected={this.state.expires}
                                        onChange={this.changeExpiry}
                            />
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default Passport;


