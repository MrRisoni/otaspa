import React, {Component} from 'react';
import {inject} from 'mobx-react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import Passport from './Passport';
import Names from './Names';

@inject('otastore')
class Passenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            name: '',
            dob: moment(),
            expires: moment()
        };

        this.changeAge = this.changeAge.bind(this);
        this.removeMe = this.removeMe.bind(this);



    }



    changeAge(ev) {
        console.log('Change passenger type');
        console.log(ev.target.value);
        this.props.otastore.changePaxType({id: this.props.pap.id, type: ev.target.value});
    }

    removeMe() {
        this.props.otastore.removePassenger(this.props.pap.id);

    }




    render() {

        let nations = [];


        return (
            <div className="row passengerCompo">
                <div className="col-md-12">


                    <div className="card bg-light">
                        <div className="card-header">

                            <div className="row">

                                <div className="col-md-3">
                                    Passenger # {this.props.pap.humanID}
                                </div>

                                <div className="col-md-4">
                                    <select className="form-control" onChange={this.handleChange}>
                                        <option key="" value="">Select Age</option>
                                        <option key="ADT" value="ADT">Adult</option>
                                        <option key="CNN" value="CNN">Child</option>
                                        <option key="INF" value="INF">Infant</option>
                                    </select>
                                </div>


                                <div className="col-md-2 offset-md-3">
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


                                    <div className="col-md-3">
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
                                                    dateFormat="DD/MM/YYYY"
                                                    selected={this.state.dob}
                                                    onChange={this.changeDOB}
                                        />
                                    </div>

                                </div>

                                <br/>


                                <Passport/>
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


