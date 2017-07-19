import React, {Component}  from 'react';
import Port from "./Port";

import timeFunctions  from '../../time_helpers';


class ShipSegment extends Component {

    render() {

        const timeData = timeFunctions.extractInfoFromSingleShipLeg(this.props.legData);
        const diffGMT = (timeData.depGMT === timeData.retGMT) ? 0 : 1;


        return (


            <div className="panel panel-primary">
                <div className="panel-heading"></div>
                <div className="panel-body">

                   <div className="row">
                       <div className="col-md-12">

                    <div className="col-md-4">

                        <Port name={this.props.legData.fromPort}
                              sailTime={timeData.depTime}
                              sailDate={timeData.depDate}
                              gmt={timeData.depGMT}
                              segmentInvoked={1}/>
                    </div>

                    <div className="col-md-4">

                        <Port name={this.props.legData.toPort}
                              sailTime={timeData.arrTime}
                              sailDate={timeData.arrDate}
                              gmt={timeData.retGMT}
                              segmentInvoked={1}
                              diffGMT={diffGMT}/>
                    </div>


                    <div className="col-md-3">


                        <div className="row">
                            <div className="col-md-8">
                                Duration: {this.props.legData.duration.hours}h {this.props.legData.duration.minutes}m
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-8">
                                Wait time: {this.props.legData.wait.hours}h {this.props.legData.wait.minutes}m
                            </div>
                        </div>
                    </div>

                       </div>
                   </div>


                    <div className="row">
                        <div className="col-md-12">
                            Company: {this.props.legData.company} <br/>
                            <b> Ship Name: {this.props.legData.ship} </b>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ShipSegment;