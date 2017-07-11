import React, {Component} from 'react';

import Leg from './Leg';

class Itinerary extends Component {
    render() {
        return (<div className="row">
            <div className="col-md-10">


                <div className="panel panel-default">
                    <div className="panel-heading">Itinerary</div>
                    <div className="panel-body">


                        <div className="panel panel-default">
                            <div className="panel-heading">{this.props.itinerary.info.fromCity}
                                - {this.props.itinerary.info.toCity}</div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-8">
                                        {this.props.itinerary.info.carrier} - {this.props.itinerary.info.depDate}

                                    </div>
                                </div>

                            </div>
                        </div>

                        <Leg segments={this.props.itinerary.aller}/>
                        { this.props.itinerary.info.roundTrip ?
                            <Leg segments={this.props.itinerary.retour}/> : ''
                        }
                    </div>
                </div>

            </div>
        </div>)
    }
}


export default Itinerary;


