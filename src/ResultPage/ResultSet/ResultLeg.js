import React, {Component}  from 'react';

import Segment from './Segment';

class ResultLeg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSegments: false
        };

        this.toggleSegments = this.toggleSegments.bind(this);
    }

    toggleSegments() {
        let self = this;

        console.log('Toggle segments');
        let newSegmentStatus = !self.state.showSegments;

        self.setState({showSegments: newSegmentStatus});
    }

    render() {

        const lastLeg = this.props.legs.length - 1;
        const toAirport = this.props.legs[lastLeg].toAirport;

        return (
            <div className="panel panel-primary">
                <div className="panel-body">

                    <div className="row">

                        <div className="col-md-5">
                            {this.props.legs[0].fromAirport} - {toAirport}
                        </div>

                        <div className="col-md-5">

                            <div className="row">

                                {this.props.stops > 0 ?

                                    (<div className="col-md-4">
                                        Stops : {this.props.stops}
                                    </div>) :
                                    (<div className="col-md-4"></div>)}

                                <div className="col-md-4">

                                    Duration : {this.props.duration.hours}h {this.props.duration.minutes}m
                                </div>

                                {this.props.waitNonZero ?
                                    (<div className="col-md-4">
                                        Wait time : {this.props.wait.hours}h {this.props.wait.minutes}m
                                    </div>)
                                    : (<div className="col-md-4"></div>)}

                            </div>

                        </div>


                        <div className="col-md-2">

                            <button className="btn btn-sm btn-primary" onClick={this.toggleSegments}>Expand</button>
                        </div>

                    </div>
                </div>


                {this.state.showSegments ?
                    (<div className="panel-body">

                        <Segment/>
                        <Segment/>
                        <Segment/>
                    </div>)
                    : (<div></div>)}


            </div>)
    }
}

export default ResultLeg;