import React, {Component} from 'react';

import CarCarousel from './CarCarousel';
import OtaSpaDatePicker from './../OtaSpaDatePicker';

class SearchBundle extends Component {

    constructor(props)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        console.log('clicked text');
    }
    render() {
        return (

            <div>


                <div className="row">


                    <div className="col-md-4">
                        <input type="text" className="form-control" onClick={this.handleClick} id="fromAirport" placeholder="From"/>
                        <OtaSpaDatePicker/>
                    </div>

                    <div className="col-md-3"></div>

                    <div className="input-group col-md-4">
                        <input type="text" className="form-control" id="toAirport" placeholder="To"/>
                    </div>


                </div>


                <CarCarousel />

            </div>


    );
    }
    }

    export default SearchBundle;


