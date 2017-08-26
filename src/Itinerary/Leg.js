import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import moment from 'moment';

import Airport from './Airport';

@inject('otastore')
@observer
class Leg extends Component {
    constructor(props)
    {
        super();

        this.getAirportData = this.getAirportData.bind(this);
    }

    getAirportData(segments)
    {

        const last_seg = segments.length -1;
        return {
            depIATA: segments[0].fromAirport.substr(0, 3),
            arrIATA: segments[last_seg].toAirport.substr(0, 3),

            depAirport: segments[0].fromAirport.substr(5),
            arrAirport: segments[last_seg].toAirport.substr(5),

            depTime: segments[0].depDateTime.substr(11,5),
            depDay: moment(segments[0].depDateTime).format('dddd'),
            depDate: moment(segments[0].depDateTime).format('DD MMMM YYYY'),

            arrTime: segments[last_seg].arrDateTime.substr(11,5),
            arrDay: moment(segments[last_seg].arrDateTime).format('dddd'),
            arrDate: moment(segments[last_seg].arrDateTime).format('DD MMMM YYYY')
        }
    }

    render() {

        const stops = (this.props.leg === 0) ? this.props.otastore.itinerary.info.departure.stops :   this.props.otastore.itinerary.info.return.stops;

        const hours = (this.props.leg === 0) ? this.props.otastore.itinerary.info.departure.waitTime.hours :   this.props.otastore.itinerary.info.return.waitTime.hours;
        const minutes = (this.props.leg === 0) ? this.props.otastore.itinerary.info.departure.waitTime.minutes :   this.props.otastore.itinerary.info.return.waitTime.minutes;

        const whours = (this.props.leg === 0) ? this.props.otastore.itinerary.info.departure.durationTime.hours :   this.props.otastore.itinerary.info.return.durationTime.hours;
        const wminutes = (this.props.leg === 0) ? this.props.otastore.itinerary.info.departure.durationTime.minutes :   this.props.otastore.itinerary.info.return.durationTime.minutes;

        let obj = (this.props.leg ===0) ? this.getAirportData(this.props.otastore.itinerary.depSegments) :  this.getAirportData(this.props.otastore.itinerary.retSegments) ;


        return (

            <div className="Leg">
                <div className="card card-primary">

                    <div className="card-header"></div>

                    <div className="card-body">

                        <div className="row">


                            <Airport iata={obj.depIATA}
                                     name={obj.depAirport}
                                     flyTime={obj.depTime}
                                     day={obj.depDay}
                                     date={obj.depDate}/>

                            <Airport iata={obj.arrIATA}
                                     name={obj.arrAirport}
                                     flyTime={obj.arrTime}
                                     day={obj.arrDay}
                                     date={obj.arrDate}/>

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


