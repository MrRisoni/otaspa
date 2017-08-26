import React, {Component} from 'react';


import Airport from './Airport';


class Leg extends Component {

    render() {
        return (

            <div className="Leg">
                <div className="card card-primary">

                    <div className="card-header"></div>

                    <div className="card-body">

                        <div className="row">


                            <Airport/>
                            <Airport/>


                            <div className="col-md-2">
                                <button className="btn btn-sm btn-primary">Expand</button>
                            </div>

                        </div>


                        <br/>


                        <div className="row">

                            <div className="col-md-4">
                                Stops:
                            </div>

                            <div className="col-md-4">
                                Duration: h m
                            </div>

                            <div className="col-md-4">
                                Wait time: h s}m
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Leg;


