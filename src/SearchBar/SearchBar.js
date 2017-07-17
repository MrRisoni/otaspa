import React, {Component}  from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


import SelectPassengers from './SelectPassengers';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
        };

        this.handlder = this.handlder.bind(this);
    }

    handlder() {
        this.props.searchHandler();
    }

    render() {
        return (<div className="row">
            <div className="col-md-12">


                <div className="panel panel-primary">
                    <div className="panel-heading">Search Form</div>
                    <div className="panel-body">


                        <div className="row">
                            <div className="col-md-5">
                                One Way

                                <input type="radio"/>

                                Round Trip


                                <input type="radio"/>
                            </div>
                        </div>

                        <br/>

                        <div className="row">
                            <div className="col-md-5">
                                <input type="text" placeholder="From Airport"
                                       className="form-control"/>
                            </div>


                            <div className="col-md-5">
                                <input type="text" placeholder="To Airport"
                                       className="form-control"/>
                            </div>
                        </div>


                        <br/>



                        <div className="row">
                            <div className="col-md-5">
                                <DatePicker className="form-control" selected={this.state.date}/>
                            </div>


                            <div className="col-md-5">
                                <DatePicker className="form-control" selected={this.state.date}/>
                            </div>


                            <div className="col-md-2">
                               <button className="btn btn-success" onClick={this.handlder}>Search</button>
                            </div>
                        </div>


                        <br/>


                        

                        <div className="row">
                            <div className="col-md-12">

                               <SelectPassengers />

order by select boxes price duration segments
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>)
    }
}

export default SearchBar;