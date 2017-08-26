import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


@inject('otastore')
@observer
class PurchasedBags extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className="col-md-6">

                <div className="purchasedLeg">
                <div className="card">
                    <div className="card-header bg-info"> Purchased</div>

                    <div className="card-body">

                        {this.props.otastore.passengers[this.props.passengerid].bags[0].types.map( (bg) => {
                            return (<div> {bg.count}  x {bg.carrier} {bg.title}  </div>)
                        })}

                    </div>
                </div>
                </div>
            </div>


        );
    }
}

export default PurchasedBags;


