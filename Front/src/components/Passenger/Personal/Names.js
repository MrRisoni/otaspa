import React, {Component} from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Names extends Component {
    constructor (props) {
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (<div className="row">
            <div className="col-md-12">

                <div className="panel panel-default">
                    <div className="panel-heading">Fill in your name</div>
                    <div className="panel-body">

                        <div className="row">

                            <div className="col-md-2">
                                <select className="form-control" id={this.props.selectID} onChange={this.localHandler}>
                                    <option></option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>

                            <div className="col-md-2">
                                <select className="form-control" id={this.props.selectID} onChange={this.localHandler}>
                                    <option>Adult</option>
                                    <option>Child</option>
                                    <option>Infant</option>
                                </select>
                            </div>

                            <div className="col-md-2">
                            <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            />
                            </div>
                        </div>


                        <br/>

                        <div className="row">


                            <div className="col-md-6">
                                <input type="text" placeholder="Surname" className="form-control"/>
                            </div>


                            <div className="col-md-6">
                                <input type="text" placeholder="Name" className="form-control"/>
                            </div>


                        </div>

                        gender type surname name

                        DOB

                    </div>
                </div>
            </div>
        </div>);
    }
}


export default Names;