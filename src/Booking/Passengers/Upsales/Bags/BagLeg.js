import React, {Component} from 'react';
import {inject} from 'mobx-react';

import BagCarrier from './BagCarrier';


@inject('MasterStore')
class BagLeg extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {

        let bagCarrierArray = [];


        this.props.MasterStore.otaStore.bagAllowance.forEach((bgl) => {
            this.props.legCarriers.forEach((lgc) => {

                if (lgc === bgl.carrier) {
                    const key = bgl.title + this.props.leg;
                    bagCarrierArray.push(<BagCarrier
                        key={key}
                        passengerid={this.props.passengerid}
                        leg={this.props.leg}
                        airline={bgl}/>);
                }
            })
        });


        return (
            <div className="col-md-6">

                <div className="alert alert-success" role="alert">{this.props.route}</div>

                {bagCarrierArray}

            </div>


        );
    }
}

export default BagLeg;


