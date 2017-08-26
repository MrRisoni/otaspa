import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


import Airport from './Airport';

@inject('otastore')
@observer
class Leg extends Component {
    render() {

        const stops = (this.props.leg === 0) ? this.props.otastore.itinerary.info.departure.stops :   this.props.otastore.itinerary.info.return.stops;

        const hours = (this.props.leg === 0) ? this.props.otastore.itinerary.info.departure.waitTime.hours :   this.props.otastore.itinerary.info.return.waitTime.hours;

        const minutes = (this.props.leg === 0) ? this.props.otastore.itinerary.info.departure.waitTime.minutes :   this.props.otastore.itinerary.info.return.waitTime.minutes;


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
                                Stops: {stops}
                            </div>

                            <div className="col-md-4">
                                Duration: {hours}h  {minutes}m
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


