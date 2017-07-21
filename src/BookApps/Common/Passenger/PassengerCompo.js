import React, {Component} from 'react';


import Names from './Personal/Names';
import BaggageList from '../../Air/Baggages/BaggageList';
import UpgradeFare from '../../Air/UpgradeFare';
import InsurancePanel from '../../Air/InsurancePanel';


class PassengerCompo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fareUpgrade: false,
            hidden: false,
            buttonName: 'Hide'
        };

        this.liftFareInfo = this.liftFareInfo.bind(this);

        this.removePassengerLocal = this.removePassengerLocal.bind(this);
        this.toggleHide = this.toggleHide.bind(this);
    }

    toggleHide()
    {
        let self = this;
        let new_hidden  = self.state.hidden;
        let new_buttonName  = self.state.buttonName;

        new_hidden = !new_hidden;

        if (new_hidden) {
            new_buttonName = 'Show';
        }
        else{
            new_buttonName = 'Hide';
        }

        self.setState({hidden:new_hidden, buttonName :new_buttonName});

    }


    removePassengerLocal() {

        console.log(this.props.id);

        this.props.removePassenger(this.props.id);
    }


    liftFareInfo(data) {
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

                <div className="panel panel-primary">
                    <div className="panel-heading">

                        <div className="row">
                            <div className="col-md-5">
                                Passenger # {this.props.id} Type {this.props.type}
                            </div>


                            <div className="col-md-2 col-md-offset-5">
                                <button className="btn btn-xs btn-success" onClick={this.toggleHide}> {this.state.buttonName} </button>
                            </div>
                        </div>
                    </div>

                    {this.state.hidden ?
                        (<div></div>)

                        :
                        ( <div className="panel-body">


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


                            {this.props.addedLater.map((later_id) => {
                                if (later_id === this.props.id) {
                                    return (<div className="row">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4">
                                            <button onClick={this.removePassengerLocal}
                                                    className="btn btn-danger btn-sm">
                                                Remove this Passenger
                                            </button>
                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>)
                                }
                                else {
                                    return (<div></div>);
                                }
                            })}


                        </div>)}
                </div>
            </div>
        </div>)
    }
}

export default PassengerCompo;