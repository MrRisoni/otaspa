import React, {Component} from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Passport extends Component {
    constructor(props) {
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
                    <div className="panel-heading">Fill in Passport Details</div>
                    <div className="panel-body">

                        <div className="row">

                            <div className="col-md-2">
                                Issue Country
                                <select className="form-control" id={this.props.selectID} onChange={this.localHandler}>
                                    <option></option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>


                            Issue Date
                            <div className="col-md-2">
                                <DatePicker
                                    className="form-control"
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                />
                            </div>

                            Exp Date
                            <div className="col-md-2">
                                <DatePicker
                                    className="form-control"
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                />
                            </div>


                            <div className="col-md-6">
                                <input type="text" placeholder="PassportID" className="form-control"/>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </div>);
    }
}


export default Passport;