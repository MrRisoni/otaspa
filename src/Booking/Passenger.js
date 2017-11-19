import React, {Component} from 'react';
import {inject} from 'mobx-react';


import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

@inject('otastore')
class Passenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            name: '',
            startDate: moment()

        };

        this.handleChange = this.handleChange.bind(this);
        this.removeMe = this.removeMe.bind(this);
        this.editSurname = this.editSurname.bind(this);
        this.editName = this.editName.bind(this);

        this.addBadStyle = this.addBadStyle.bind(this);
        this.addGoodStyle = this.addGoodStyle.bind(this);


    }


    removeMe() {
        this.props.otastore.removePassenger(this.props.pap.id);

    }

    handleChange(ev) {
        console.log('Change passenger type');
        console.log(ev.target.value);
        this.props.otastore.changePaxType({id: this.props.pap.id, type: ev.target.value});
    }

    editSurname(ev) {
        const fieldInput = ev.target.value.toUpperCase();

        this.setState({surname: fieldInput});

        if (this.props.otastore.validateNameSurname(fieldInput)) {


            this.props.otastore.editName(
                {
                    name: '',
                    surname: fieldInput,
                    id: this.props.pap.id
                });

            this.addGoodStyle(document.getElementById('#paxSurame' + this.props.pap.id));


        }
        else {
            this.addBadStyle(document.getElementById('#paxSurname' + this.props.pap.id));
        }
    }

    editName(ev) {
        const fieldInput = ev.target.value.toUpperCase();

        this.setState({name: fieldInput});

        // console.log(document.getElementById('#paxSurname' + this.props.pap.id));


        if (this.props.otastore.validateNameSurname(fieldInput)) {


            this.props.otastore.editName(
                {
                    name: '',
                    surname: fieldInput,
                    id: this.props.pap.id
                });

            //document.getElementById('#paxSurname' + this.props.pap.id).style.color = 'red';
            this.addGoodStyle(document.getElementById('#paxName' + this.props.pap.id));
        }
        else {
            this.addBadStyle(document.getElementById('#paxName' + this.props.pap.id));
        }
    }

    addBadStyle(elm) {
        // console.log(document.getElementById('#paxSurname' + this.props.pap.id));
        console.log(elm);
        elm.style.color = 'red';

        /* badStyle: { color: 'red', 'border-width' : 'thick',
             'border-style' : 'solid', 'border-color': 'red'}*/
    }

    addGoodStyle(elm) {
        console.log(elm);
        elm.style.color = 'black';
        /*
                goodStyle : { color: '', 'border-width' : '0px',
                    'border-style' : '', 'border-color': ''},*/

    }

    render() {
        return (
            <div className="row passengerCompo">
                <div className="col-md-12">


                    <div className="card bg-light">
                        <div className="card-header">

                            <div className="row">

                                <div className="col-md-5">
                                    Passenger # {this.props.pap.humanID}
                                </div>

                                <div className="col-md-5"></div>

                                <div className="col-md-2">
                                    <button className="btn btn-sm btn-dark btn-block"
                                            data-toggle="collapse"
                                            data-target={`#passengerCollapse${this.props.pap.id}`} aria-expanded="false"
                                            aria-controls="collapseExample">
                                        Toggle
                                    </button>
                                </div>

                            </div>
                        </div>


                        <div className="collapse show" id={`passengerCollapse${this.props.pap.id}`}>

                            <div className="card-body">

                                <div className="row">

                                    <div className="col-md-2">
                                        <select className="form-control" onChange={this.handleChange}>
                                            <option key="" value="">Age Group</option>
                                            <option key="ADT" value="ADT">ADT</option>
                                            <option key="CNN" value="CNN">CNN</option>
                                            <option key="INF" value="INF">INF</option>
                                        </select>
                                    </div>

                                    <div className="col-md-2">
                                        <select className="form-control">
                                            <option value="">Gender</option>
                                            <option value="MR">Male</option>
                                            <option value="MS">Female</option>
                                        </select>
                                    </div>


                                    <div className="col-md-5">
                                        <input type="text" placeholder="Surname"
                                               id={`#paxSurname${this.props.pap.id}`}
                                               value={this.state.surname}
                                               onChange={this.editSurname} className="form-control"/>

                                    </div>


                                    <div className="col-md-3">
                                        <input type="text" placeholder="Name" id={`#paxName${this.props.pap.id}`}
                                               value={this.state.name}
                                               onChange={this.editName} className="form-control"/>

                                    </div>

                                </div>

                                <br/>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="birthday">BirthDate</label>
                                        <DatePicker className="form-control"
                                                    selected={this.state.startDate}
                                        />
                                    </div>

                                </div>

                                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".collapsePassports" aria-expanded="false" aria-controls="collapsePassports">
                                    Button with data-target
                                </button>

                                <div className="collapsePassports">

                                    <br/>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <select className="form-control" onChange={this.handleChange}>
                                                <option key="" value="">Nationality</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <select className="form-control" onChange={this.handleChange}>
                                                <option key="" value="">Issue Country</option>
                                            </select>
                                        </div>
                                    </div>


                                    <br/>
                                    <div className="row">

                                        <div className="col-md-6">
                                            <input type="text" placeholder="Passport No"
                                                   className="form-control"/>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="birthday">Expiration Date</label>
                                            <DatePicker className="form-control"
                                                        selected={this.state.startDate}
                                            />
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="card-footer">

                            <div className="row">

                                <div className="col-md-4"></div>

                                <div className="col-md-4">

                                    <button className="btn btn-primary btn-sm btn-danger" onClick={this.removeMe}>
                                        Remove this Passenger
                                    </button>


                                </div>
                            </div>

                        </div>


                    </div>


                </div>

            </div>

        );
    }
}

export default Passenger;


