import React, {Component}  from 'react';

import Segment from './Segment';

class Result extends Component {
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

        const finalDepLeg = this.props.data.departLegs.length -1;

        const startDepAirport = this.props.data.departLegs[0].fromAirport;
        const endDepAirport = this.props.data.departLegs[finalDepLeg].toAirport;


        const finalRetLeg = this.props.data.departLegs.length -1;

        const startRetAirport = this.props.data.returnLegs[0].fromAirport;
        const endRetAirport = this.props.data.returnLegs[finalRetLeg].toAirport;


        return (




            <div className="panel panel-primary">
                <div className="panel-heading">Itinerary Details</div>
                <div className="panel-body">

                    <div className="row">

                        <div className="col-md-10">
                            {startDepAirport}  - {endDepAirport}
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

                <div className="panel-footer">
                    <div className="row">
                        <div className="col-md-5">
                            Price {this.props.data.totalPrice}
                        </div>

                        <div className="col-md-4"></div>

                        <div className="col-md-3">

                            <button className="btn btn-sm btn-primary">Continue</button>

                        </div>


                    </div>

                </div>
            </div>)
    }
}

export default Result;