import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import SelectBag from './SelectBag';

@inject('MasterStore')
@observer
class BagCarrier extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div className="card card-primary bagCarrier">
                <div className="card-header">

                    <div className="row">
                        <div className="col-md-9">
                            {this.props.airline.title} Max num {this.props.airline.maxBags}
                        </div>
                    </div>
                </div>

                <div className="card-body">


                    {this.props.airline.bags.map((bag) => {
                        return (<SelectBag key={bag.key}
                                           carrier={this.props.airline.carrier}
                                           passengerid={this.props.passengerid}
                                           leg={this.props.leg}
                                           bagData={bag} />)
                    })}


                </div>
            </div>

        );
    }
}

export default BagCarrier;


