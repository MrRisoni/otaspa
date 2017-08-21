import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import BagCarrier from './BagCarrier';


@inject('otastore')
class BagLeg extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let bagCarrierArray = [];

        this.props.otastore.bagAllowance.map((bgl) => {
            this.props.legCarriers.map((lgc) => {

                if (lgc == bgl.carrier) {
                    bagCarrierArray.push(<BagCarrier airline={bgl}/>);
                }
            })
        })


        return (
            <div className="col-md-6">

                <div className="alert alert-success" role="alert">{this.props.route}</div>

                {bagCarrierArray}

            </div>


        );
    }
}

export default BagLeg;


