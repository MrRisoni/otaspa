import React, {Component} from 'react';
import moment from 'moment';
import Airport from './Airport';


class Segment extends Component {

    constructor(props) {
        super();

        this.getSegmentData = this.getSegmentData.bind(this);
    }

    getSegmentData(segment) {

        return {
            depIATA: segment.fromAirport.substr(0, 3),
            arrIATA: segment.toAirport.substr(0, 3),

            depAirport: segment.fromAirport.substr(5),
            arrAirport: segment.toAirport.substr(5),

            depTime: segment.depDateTime.substr(11, 5),
            depTimeGMT: segment.depDateTime,
            depDay: moment(segment.depDateTime).format('dddd'),
            depDate: moment(segment.depDateTime).format('DD MMMM YYYY'),

            arrTime: segment.arrDateTime.substr(11, 5),
            arrTimeGMT: segment.arrDateTime,
            arrDay: moment(segment.arrDateTime).format('dddd'),
            arrDate: moment(segment.arrDateTime).format('DD MMMM YYYY'),

            img: segment.img,
            fromCity : segment.fromCity,
            toCity: segment.toCity
        }
    }

    render() {


        let obj = this.getSegmentData(this.props.segData);
        const positiveWaitTime = (this.props.segData.waitTime.total >0);


        return (

            <div className="segments">

                <div className="card">
                    <div className="card-header bg-info">Segment #{this.props.segIndex}</div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-2">
                                <img width={obj.img.width}
                                     src={obj.img.url} />
                            </div>


                            <Airport iata={obj.depIATA}
                                     city={obj.fromCity}
                                     name={obj.depAirport}
                                     flyTime={obj.depTime}
                                     flyTimeGMT={obj.depTimeGMT}
                                     day={obj.depDay}
                                     date={obj.depDate}/>

                            <Airport iata={obj.arrIATA}
                                     city={obj.toCity}
                                     name={obj.arrAirport}
                                     flyTime={obj.arrTime}
                                     flyTimeGMT={obj.arrTimeGMT}
                                     day={obj.arrDay}
                                     date={obj.arrDate}/>

                        </div>


                    </div>


                    <div className="card-footer">
                        <div className="row">

                            <div className="col-md-5">
                                Duration {this.props.segData.durationTime.hours}h {this.props.segData.durationTime.minutes}m
                            </div>


                            {positiveWaitTime ? (
                                <div className="col-md-5">
                                    Wait time {this.props.segData.waitTime.hours}h {this.props.segData.waitTime.minutes}m
                                </div>
                            ) : (<div className="col-md-5"></div>)}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Segment;


