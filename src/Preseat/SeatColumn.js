import React, {Component} from 'react';

import SeatRow from './SeatRow';

class SeatColumn extends Component {

    render() {
        return (

            <div className="row">


                <div className="col-md-3">
                    <SeatRow />
                </div>


                <div className="col-md-3">
                    <SeatRow />
                </div>




                <div className="col-md-3">
                    <SeatRow />
                </div>


            </div>
        );
    }
}

export default SeatColumn;


