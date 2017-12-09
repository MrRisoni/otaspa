import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="row searchBar">

                <div className="col-md-1"></div>

                <div className="col-md-2">
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

        );
    }
}

export default SearchBar;


