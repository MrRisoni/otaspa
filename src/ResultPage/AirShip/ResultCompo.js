import React, {Component}  from 'react';

import ResultLeg from './ResultLeg';

class ResultCompo extends Component {
    constructor(props)
    {
        super(props);

        this.proceed = this.proceed.bind(this);
    }

    proceed()
    {
        this.props.router.push('/some/path');

    }
    render() {
        return (

            <div className="panel panel-primary">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-md-4">
                            Result Details
                            Stops : {this.props.data.stops}
                        </div>
                        <div className="col-md-4">

                            Duration: {this.props.data.duration.hours}h {this.props.data.duration.minutes}m
                        </div>
                        <div className="col-md-4">

                            Waiting time: {this.props.data.waitTime.hours}h {this.props.data.waitTime.minutes}m
                        </div>
                    </div>
                </div>
                <div className="panel-body">

                    <ResultLeg legs={this.props.data.departLegs}
                               duration={this.props.data.depart_leg_duration}
                               wait={this.props.data.depart_leg_wait}
                               stops={this.props.data.depart_stops}
                               waitNonZero={this.props.data.depart_leg_wait_minutes >0}
                                />

                    <ResultLeg legs={this.props.data.returnLegs}
                               duration={this.props.data.return_leg_duration}
                               wait={this.props.data.return_leg_wait}
                               stops={this.props.data.return_stops}
                               waitNonZero={this.props.data.return_leg_wait_minutes >0}
                               />

                </div>

                <div className="panel-footer">
                    <div className="row">
                        <div className="col-md-5">
                            <b> Price {this.props.data.totalPrice} </b>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-3">
                            <button className="btn  btn-primary" onClick={this.proceed}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default ResultCompo;