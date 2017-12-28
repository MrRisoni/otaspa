import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar">
                 <div className="row ">


                <div className="col-md-2 offset-md-1">
                    <input type="text" className="form-control" onClick={this.handleClick} id="fromAirport"
                           placeholder="From"/>
                    {/* <OtaSpaDatePicker/> */}
                </div>

                <div className=" col-md-2">
                    <input type="text" className="form-control" id="toAirport" placeholder="To"/>
                </div>


                <div className=" col-md-2">
                    <input type="text" className="form-control" id="depDate" placeholder="Departure"/>
                </div>


                <div className=" col-md-2">
                    <input type="text" className="form-control" id="retDate" placeholder="Return"/>
                </div>


                <div className=" col-md-2">
                    <input type="text" className="form-control" id="cabClass" placeholder="Class & Passengers"/>
                </div>
            </div>

                <div className="row searchOptions">

                    <div className="col-md-2 offset-md-2">
                        <div className="form-check">
                            <label>
                                <input
                                    type="checkbox"/>

                               Round Trip
                            </label>
                        </div>
                    </div>



                    <div className="col-md-2">
                        <div className="form-check">
                            <label>
                                <input
                                    type="checkbox"/>

                                Book a hotel
                            </label>
                        </div>
                    </div>




                    <div className="col-md-2">
                        <div className="form-check">
                            <label>
                                <input
                                    type="checkbox"/>

                                Book a car
                            </label>
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}

export default SearchBar;


