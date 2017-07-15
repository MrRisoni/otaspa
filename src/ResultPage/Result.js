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
        return (




                <div className="panel panel-primary">
                    <div className="panel-heading">Itinerary Details</div>
                    <div className="panel-body">


                        <button className="btn btn-sm btn-primary" onClick={this.toggleSegments}>Expand</button>
                    </div>




                {this.state.showSegments ?
                     (<div className="panel-body">

                        <Segment/>
                        <Segment/>
                        <Segment/>
                    </div>)
                         : (<div></div>)}

                    <div className="panel-footer">
                            Price  <button className="btn btn-sm btn-primary">Continue</button>

                    </div>
            </div>)
    }
}

export default Result;