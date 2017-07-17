import React, {Component}  from 'react';
import Airport from "./Airport";

import timeFunctions  from '../../time_helpers';


class Segment extends Component {

    render() {

        const timeData= timeFunctions.extractInfoFromSingleLeg(this.props.legData);


        return (


            <div className="panel panel-primary">
                <div className="panel-heading"></div>
                <div className="panel-body">

                    <div className="col-md-4">

                        <Airport IATA_code={timeData.IATA_Airport}
                                 name={timeData.Airport}
                                 flyTime={timeData.flyTime}
                                 flyDate={timeData.flyDate}
                                 gmt={timeData.flyGMT}
                                 segmentInvoked={1}/>
                    </div>

                    <div className="col-md-4">

                        <Airport IATA_code={timeData.IATA_Airport}
                                 name={timeData.Airport}
                                 flyTime={timeData.flyTime}
                                 flyDate={timeData.flyDate}
                                 gmt={timeData.flyGMT}
                                 segmentInvoked={1}/>
                    </div>



                </div>
            </div>
        )
    }
}

export default Segment;