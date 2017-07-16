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


        return (
            <div className="panel panel-primary">
                <div className="panel-body">

                    <div className="row">

                        <div className="col-md-10">
                            {this.props.legs[0].toCity}
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