import React, {Component} from 'react';

import Leg from './Leg';

class Itinerary extends Component {
    render() {
        return (<div className="row">
            <div className="col-md-10">


                <div className="panel panel-primary">
                    <div className="panel-heading">Itinerary</div>
                    <div className="panel-body">


                        <div className="panel panel-primary">
                            <div className="panel-heading">{this.props.itinerary.info.fromCity}
                                - {this.props.itinerary.info.toCity} {this.props.itinerary.info.depDate}</div>
                            <div className="panel-body">

                               <Leg segments={this.props.itinerary.aller}/>

                            </div>
                        </div>




                            <div className="panel panel-primary">
                                <div className="panel-heading">{this.props.itinerary.info.toCity}
                                    - {this.props.itinerary.info.fromCity} {this.props.itinerary.info.retDate}</div>
                                <div className="panel-body">

                                   <Leg segments={this.props.itinerary.retour}/>

                                </div>
                            </div>


                    </div>
                </div>

            </div>
        </div>)
    }
}


export default Itinerary;


