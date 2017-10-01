import React, {Component} from 'react';

import CarCarousel from './CarCarousel';

class SearchBundle extends Component {

    render() {
        return (

            <div>


                <div className="row">


                    <div className="col-md-4">
                        <input type="text" class="form-control" id="fromAirport" placeholder="From"/>
                    </div>

                    <div className="col-md-3"></div>

                    <div className="input-group col-md-4">
                        <input type="text" class="form-control" id="toAirport" placeholder="To"/>
                    </div>


                </div>


                <CarCarousel />

            </div>


    );
    }
    }

    export default SearchBundle;


