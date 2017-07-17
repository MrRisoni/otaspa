import React, {Component}  from 'react';
import Airport from "./Airport";

import timeFunctions  from '../../time_helpers';


class Segment extends Component {

    render() {

        const timeData= timeFunctions.extractInfoFromSingleLeg(this.props.legData);
        const diffGMT = (timeData.depGMT === timeData.retGMT) ?  0 : 1;


        return (


            <div className="panel panel-primary">
                <div className="panel-heading"></div>
                <div className="panel-body">

                    <div className="col-md-4">

                        <Airport IATA_code={timeData.depIATA_Airport}
                                 name={timeData.depAirport}
                                 flyTime={timeData.depTime}
                                 flyDate={timeData.depDate}
                                 gmt={timeData.depGMT}
                                 segmentInvoked={1}/>
                    </div>

                    <div className="col-md-4">

                        <Airport IATA_code={timeData.airIATA_Airport}
                                 name={timeData.arrAirport}
                                 flyTime={timeData.arrTime}
                                 flyDate={timeData.arrDate}
                                 gmt={timeData.retGMT}
                                 segmentInvoked={1}
                                 diffGMT={diffGMT}/>
                    </div>



                </div>
            </div>
        )
    }
}

export default Segment;