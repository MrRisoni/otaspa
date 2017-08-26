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

        const whours = (this.props.leg === 0) ? this.props.otastore.itinerary.info.departure.durationTime.hours :   this.props.otastore.itinerary.info.return.durationTime.hours;
        const wminutes = (this.props.leg === 0) ? this.props.otastore.itinerary.info.departure.durationTime.minutes :   this.props.otastore.itinerary.info.return.durationTime.minutes;


        let  depIATA = this.props.otastore.itinerary.depSegments[0].fromAirport.substr(0,3);
        let last_seg = this.props.otastore.itinerary.depSegments.length -1;
        let arrIATA = this.props.otastore.itinerary.depSegments[last_seg].fromAirport.substr(0,3);

        if (this.props.leg  === 1) {
            depIATA = this.props.otastore.itinerary.retSegments[0].fromAirport.substr(0,3);
            last_seg = this.props.otastore.itinerary.retSegments.length -1;
            arrIATA = this.props.otastore.itinerary.retSegments[last_seg].fromAirport.substr(0,3);
       }

        return (

            <div className="Leg">
                <div className="card card-primary">

                    <div className="card-header"></div>

                    <div className="card-body">

                        <div className="row">


                            <Airport iata={depIATA}/>

                            <Airport iata={arrIATA}/>


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
                                Wait time: {whours}h  {wminutes}m
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Leg;


