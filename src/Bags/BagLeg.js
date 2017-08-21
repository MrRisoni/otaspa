import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


@inject('otastore')
class BagLeg extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-6">

                <div className="alert alert-success" role="alert">{this.props.route}</div>


                {this.props.otastore.bagAllowance.map((bgl) => {

                    {this.props.legCarriers.map((lgc) => {
                            {
                                if (lgc == bgl.carrier)
                                    <div>Bag carrier</div>
                            }

                        })}
                })}

            </div>


        );
    }
}

export default BagLeg;


