import React, {Component}  from 'react';

import Segment from './Segment';
import Airport from './Airport';

import timeFunctions  from '../../time_helpers';

class ResultLeg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSegments: false,
            showLabel: 'Show'
        };

        this.toggleSegments = this.toggleSegments.bind(this);
    }

    toggleSegments() {
        let self = this;

        console.log('Toggle segments');
        let newSegmentStatus = !self.state.showSegments;

        self.setState({showSegments: newSegmentStatus});

        self.setState({showLabel: 'Show'});

        if (newSegmentStatus === true) {
            self.setState({showLabel: 'Hide'});
        }
    }

    render() {

        const timeData= timeFunctions.extractInfoFromLegs(this.props.legs);

        return (
            <div className="panel panel-primary">
                <div className="panel-body">

                    <div className="row">

                        <div className="col-md-8">

                            <div className="row">

                                <Airport IATA_code={timeData.depIATA_Airport}
                                         name={timeData.depAirport}
                                         flyTime={timeData.depTime}
                                         flyDate={timeData.depDate}
                                         gmt={timeData.depGMT}/>

                                <Airport IATA_code={timeData.airIATA_Airport}
                                         name={timeData.arrAirport}
                                         flyTime={timeData.arrTime}
                                         flyDate={timeData.arrDate}
                                         gmt={timeData.retGMT}/>
                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="row">
                                <div className="col-md-8">
                                    Stops: {this.props.stops}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-8">
                                    Duration: {this.props.duration.hours}h {this.props.duration.minutes}m
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-8">
                                    Wait time: {this.props.wait.hours}h {this.props.wait.minutes}m
                                </div>
                            </div>
                        </div>


                        <div className="col-md-1">
                            <button className="btn btn-sm btn-primary"
                                    onClick={this.toggleSegments}>{this.state.showLabel}</button>
                        </div>

                    </div>
                </div>


                {this.state.showSegments ?
                    (<div className="panel-body">

                        {this.props.legs.map((seg, index) => {
                            return (<Segment legData={seg}
                                             key={index}/>)
                        })}

                    </div>)
                    : (<div></div>)}


            </div>)
    }
}

export default ResultLeg;