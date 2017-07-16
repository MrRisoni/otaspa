import React, {Component}  from 'react';

import Segment from './Segment';
import Airport from './Airport';

import moment from 'moment';


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

        const lastLeg = this.props.legs.length - 1;

        const depIATA_Airport = this.props.legs[0].fromAirport.substr(0, 3);
        const depAirport = this.props.legs[0].fromAirport.substr(4);

        const airIATA_Airport = this.props.legs[lastLeg].toAirport.substr(0, 3);
        const arrAirport = this.props.legs[lastLeg].toAirport.substr(4);

        const depTime = moment(this.props.legs[0].depDateTime).format('HH:MM');
        const arrTime = moment(this.props.legs[lastLeg].arrDateTime).format('HH:MM');

        const depDate = moment(this.props.legs[0].depDateTime).format('dd DD/MM/YYYY');
        const arrDate = moment(this.props.legs[lastLeg].arrDateTime).format('dd DD/MM/YYYY');

        const depGMT = this.props.legs[lastLeg].depDateTime.substr(-6);
        const retGMT = this.props.legs[lastLeg].arrDateTime.substr(-6);


        return (
            <div className="panel panel-primary">
                <div className="panel-body">

                    <div className="row">

                        <div className="col-md-8">

                            <div className="row">

                                <Airport IATA_code={depIATA_Airport}
                                         name={depAirport}
                                         flyTime={depTime}
                                         flyDate={depDate}
                                         gmt={depGMT}/>

                                <Airport IATA_code={airIATA_Airport}
                                         name={arrAirport}
                                         flyTime={arrTime}
                                         flyDate={arrDate}
                                         gmt={retGMT}/>
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