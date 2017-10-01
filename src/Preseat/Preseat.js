import React, {Component} from 'react';

import SeatColumn from './SeatColumn';

class Preseat extends Component {

    render() {


        let ColDiv = [];
        for (let i = 0; i < 4; i++) {
            // how many columns in the aircaft fuselage
            ColDiv.push(<SeatColumn key={i}/>)
        }
        return (


            <div className="row contactDetails">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header  bg-primary">Select your Seat</div>
                        <div className="card-body">

                            <div className="row">
                                {ColDiv}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Preseat;


