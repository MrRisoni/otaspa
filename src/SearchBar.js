import React, {Component}  from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
        }
    }

    render() {
        return (<div>


            <div className="row">
                <div className="col-md-5">
                    One Way Round Trip
                </div>
            </div>

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


            <div className="row">
                <div className="col-md-5">
                    <DatePicker className="form-control" selected={this.state.date}/>
                </div>


                <div className="col-md-5">
                    <DatePicker className="form-control" selected={this.state.date}/>
                </div>
            </div>



            <div className="row">
                <div className="col-md-5">

                    </div>
            </div>

        </div>)
    }
}

export default SearchBar;