import React, {Component} from 'react';

import SeatColumn from './SeatColumn';

class Preseat extends Component {

    render() {


        let ColDiv = [];
        let ColHeaders = [];

        const alphabet  = ['A', 'B', 'C', 'D'];

        for (let i = 0; i < 4; i++) {
            // how many columns in the aircraft fuselage
            ColDiv.push(<SeatColumn key={i} colID={i}/>);

            ColHeaders.push(<div className="col-md-3" key={alphabet[i]} >{alphabet[i]}</div> )
        }
        return (


            <div className="row contactDetails">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header  bg-primary">Select your Seat</div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header  bg-primary">Select Passenger</div>
                                        <div className="card-body">

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">

                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header  bg-primary">Select Leg</div>
                                        <div className="card-body">

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {ColHeaders}
                            </div>

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


