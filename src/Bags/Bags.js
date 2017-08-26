import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


import BagLeg from './BagLeg';
import PurchasedBags from './PurchasedBags';

@inject('otastore')
class Bags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMe: true,
            label: 'Hide'
        };

        this.toggleMe = this.toggleMe.bind(this);
    }

    toggleMe() {
        var self = this;

        let showme = !self.state.showMe;
        let btn = (showme) ? 'Hide' : 'Show';
        self.setState({showMe: showme, label: btn});
    }

    render() {
        return (

            <div className="row bagComponent">
                <div className="col-md-12">


                    <div className="alert alert-success" role="alert">

                        <div className="row">

                            <div className="col-md-5">
                                Purchase bags!

                            </div>


                            <div className="col-md-5"></div>

                            <div className="col-md-2">
                                <button className="btn btn-sm btn-dark btn-block"
                                        onClick={this.toggleMe}> {this.state.label} </button>
                            </div>
                        </div>

                    </div>

                    {this.state.showMe &&


                    <div className="row">


                        <BagLeg route="departRoute"
                                passengerid={this.props.passengerid}
                                legCarriers={this.props.otastore.outboundCarriers}
                                leg={0}
                        />


                        <BagLeg route="returnRoute"
                                passengerid={this.props.passengerid}
                                legCarriers={this.props.otastore.inboundCarriers}
                                leg={1}
                        />

                    </div>
                    }

                    {this.state.showMe &&


                    <div className="row">
                        <PurchasedBags passengerid={this.props.passengerid}
                        />
                    </div>}


                </div>
            </div>





        );
    }
}

export default Bags;


