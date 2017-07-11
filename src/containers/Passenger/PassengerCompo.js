import React, {Component} from 'react';


import Names from './Personal/Names';
import BaggageList from './Baggages/BaggageList';
import UpgradeFare from './UpgradeFare';
import  InsurancePanel from './Insurance/InsurancePanel';


class PassengerCompo extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (<div className="row">
            <div className="col-md-10">

                <div className="panel panel-default">
                    <div className="panel-heading">Passenger # {this.props.id} Type </div>
                    <div className="panel-body">


                        <Names   papid={this.props.id}
                                 updateNames={this.props.updateNames}/>



                        <BaggageList papid={this.props.id}
                                     bagInfo={this.props.bagInfo}
                                     updateAppBags={this.props.updateAppBags}
                        />

                        <InsurancePanel/>

                        <UpgradeFare
                            papid={this.props.id}
                            fareInfo={this.props.fareInfo}
                            updateFareState={this.props.updateFareState} />

                    </div>
                </div>
            </div>
        </div>)
    }
}

export default PassengerCompo;