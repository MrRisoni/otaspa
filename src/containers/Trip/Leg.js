import React, {Component} from 'react';

class Leg extends Component {
    render() {
        let segmentsDiv = [];

        for (let s = 0; s < this.props.segments.length; s++) {
            segmentsDiv.push(<div key={s} className="panel panel-default">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-4">
                            {this.props.segments[s].fromCity} <br/>
                            {this.props.segments[s].fromAirport} <br/>
                            {this.props.segments[s].depDateTime}
                        </div>
                        <div className="col-md-4">
                            {this.props.segments[s].toCity} <br/>
                            {this.props.segments[s].toAirport} <br/>
                            {this.props.segments[s].arrDateTime}
                        </div>
                        <div className="col-md-4">
                            {this.props.segments[s].duration}
                        </div>
                    </div>
                </div>
            </div>);

            if (this.props.segments[s].waitTime != '') {

                segmentsDiv.push(
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-5">
                                    Waiting time : {this.props.segments[s].waitTime}
                                </div>
                            </div>
                        </div>
                    </div>);

            }
        }

        return (<div className="row">
            <div className="col-md-12">
                {segmentsDiv}
            </div>
        </div>)
    }
}

export default Leg;