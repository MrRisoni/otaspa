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
            depDay: moment(segment.depDateTime).format('dddd'),
            depDate: moment(segment.depDateTime).format('DD MMMM YYYY'),

            arrTime: segment.arrDateTime.substr(11, 5),
            arrDay: moment(segment.arrDateTime).format('dddd'),
            arrDate: moment(segment.arrDateTime).format('DD MMMM YYYY')
        }
    }

    render() {


        let obj = this.getSegmentData(this.props.segData);

        return (

            <div className="segments">

                <div className="card">
                    <div className="card-header bg-info"></div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-1"></div>


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

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Segment;

