import React, {Component} from 'react';
import { inject} from 'mobx-react';


import BagLeg from './BagLeg';
import PurchasedBags from './PurchasedBags';

@inject('MasterStore')
class Bags extends Component {
    constructor(props) {
        super(props);

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
                                <button className="btn btn-sm btn-dark btn-block btnToggle"
                                        data-toggle="collapse" data-target={`#bagsCollapse${this.props.passengerid}`} aria-expanded="false" aria-controls="collapseExample">
                                     Toggle Bags </button>
                            </div>
                        </div>

                    </div>

                    <div className="collapse " id={`bagsCollapse${this.props.passengerid}`}>


                            <div className="row">


                                <BagLeg route={this.props.MasterStore.otaStore.departRoute}
                                        passengerid={this.props.passengerid}
                                        legCarriers={this.props.MasterStore.otaStore.outboundCarriers}
                                        leg={0}
                                />


                                <BagLeg route={this.props.MasterStore.otaStore.returnRoute}
                                        passengerid={this.props.passengerid}
                                        legCarriers={this.props.MasterStore.otaStore.inboundCarriers}
                                        leg={1}
                                />

                            </div>


                            <div className="row">
                                <PurchasedBags leg={0} passengerid={this.props.passengerid}
                                />

                                <PurchasedBags leg={1} passengerid={this.props.passengerid}
                                />
                            </div>

                    </div>


                </div>
            </div>





        );
    }
}

export default Bags;


