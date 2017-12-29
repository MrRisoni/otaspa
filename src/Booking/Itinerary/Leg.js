import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import moment from 'moment';

import Airport from './Airport';
import Segment from './Segment';


@inject('ItineraryStore')
@observer
class Leg extends Component {
    constructor(props) {
        super();

        this.getAirportData = this.getAirportData.bind(this);

    }

    getAirportData(segments) {

        const last_seg = segments.length - 1;
        return {
            depIATA: segments[0].fromAirport.substr(0, 3),
            arrIATA: segments[last_seg].toAirport.substr(0, 3),

            depAirport: segments[0].fromAirport.substr(5),
            arrAirport: segments[last_seg].toAirport.substr(5),

            depTime: segments[0].depDateTime.substr(11, 5),
            depDay: moment(segments[0].depDateTime).format('dddd'),
            depDate: moment(segments[0].depDateTime).format('DD MMMM YYYY'),

            arrTime: segments[last_seg].arrDateTime.substr(11, 5),
            arrDay: moment(segments[last_seg].arrDateTime).format('dddd'),
            arrDate: moment(segments[last_seg].arrDateTime).format('DD MMMM YYYY'),

            fromCity: segments[0].fromCity,
            toCity: segments[last_seg].toCity

        }
    }

    render() {

        let obj = this.getAirportData(this.props.segments);

        let segmentsDiv = [];


        this.props.segments.forEach((sg, idx) => {
            segmentsDiv.push(<Segment key={idx} segData={sg} segIndex={idx+1}/>);
        });

        return (

            <div className="Leg">
                <div className="card  bg-light mb-3 border-primary mb-3">

                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-2">
                                {this.props.segTitle}
                            </div>

                            <div className="col-md-2 offset-md-8">
                                <button className="btn btn-sm btn-dark btn-block btnToggle"
                                        data-toggle="collapse"
                                        data-target={`#legCollapse${this.props.legId}`} aria-expanded="false"
                                        aria-controls="collapseExample">
                                    Toggle
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="card-body show" id={`legCollapse${this.props.legId}`}>

                        <div className="row">


                            <Airport iata={obj.depIATA}
                                     city={obj.fromCity}
                                     name={obj.depAirport}
                                     flyTime={obj.depTime}
                                     flyTimeGMT={obj.depTime}
                                     day={obj.depDay}
                                     date={obj.depDate}/>

                            <Airport iata={obj.arrIATA}
                                     city={obj.toCity}
                                     name={obj.arrAirport}
                                     flyTime={obj.arrTime}
                                     flyTimeGMT={obj.depTime}
                                     day={obj.arrDay}
                                     date={obj.arrDate}/>

                            <div className="col-md-2">
                                <button className="btn btn-sm btn-primary"
                                data-toggle="collapse" data-target={`#segmentsCollapse${this.props.legId}`} aria-expanded="false" aria-controls="collapseExample">
                                Expand
                                </button>
                            </div>

                        </div>


                        <br/>


                        <div className="row">

                            <div className="col-md-4">
                                Stops: {this.props.stops}
                            </div>

                            <div className="col-md-4">
                                Duration: {this.props.durHours}h {this.props.durMinutes}m
                            </div>

                            <div className="col-md-4">
                                Wait time: {this.props.waitHours}h {this.props.waitMinutes}m
                            </div>
                        </div>


                        <div className="collapse" id={`segmentsCollapse${this.props.legId}`}>
                            {segmentsDiv}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Leg;


