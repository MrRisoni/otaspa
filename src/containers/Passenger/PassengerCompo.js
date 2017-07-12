import React, {Component} from 'react';


import Names from './Personal/Names';
import BaggageList from './Baggages/BaggageList';
import UpgradeFare from './UpgradeFare';
import  InsurancePanel from './InsurancePanel';


class PassengerCompo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fareUpgrade : false
        };

        this.liftFareInfo = this.liftFareInfo.bind(this);
    }

    liftFareInfo(data)
    {
        var self = this;

        if (data === 'light') {
            self.setState({fareUpgrade: 0});
        }
        else {
            self.setState({fareUpgrade: 1});
        }
    }

    render() {
        return (<div className="row">
            <div className="col-md-10">

                <div className="panel panel-default">
                    <div className="panel-heading">Passenger # {this.props.id} Type</div>
                    <div className="panel-body">


                        <Names papid={this.props.id}
                               updateNames={this.props.updateNames}/>


                        <UpgradeFare
                            papid={this.props.id}
                            fareInfo={this.props.fareInfo}
                            updateFareState={this.props.updateFareState}
                            liftFareInfoUp={this.liftFareInfo}/>


                        <BaggageList papid={this.props.id}
                                     bagInfo={this.props.bagInfo}
                                     upgradedFare={this.state.fareUpgrade}
                                     updateAppBags={this.props.updateAppBags}
                        />

                        <InsurancePanel papid={this.props.id}
                                        insuranceInfo={this.props.insuranceInfo}
                                        updateAppInsurance={this.props.updateAppInsurance}

                        />


                    </div>
                </div>
            </div>
        </div>)
    }
}

export default PassengerCompo;