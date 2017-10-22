import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import BagRemoval from './BagRemoval'

@inject('otastore')
@observer
class PurchasedBags extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {

        let purchasedDiv = [];

        this.props.otastore.passengers[this.props.passengerid].bags[this.props.leg].types.forEach((bg) => {
            if (bg.count > 0) {
                purchasedDiv.push(
                    <BagRemoval
                        key={bg.key}
                        bagData={bg}
                        passengerid={this.props.passengerid}
                        leg={this.props.leg}
                    />);
            }
        });

        return (

            <div className="col-md-6">

                <div className="purchasedLeg">
                    <div className="card">
                        <div className="card-header bg-info"> Purchased</div>

                        <div className="card-body">

                            {purchasedDiv}

                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default PurchasedBags;


