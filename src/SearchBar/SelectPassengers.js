import React, {Component} from 'react';

import PlusMinus from './PlusMinus';

class SelectPassengers extends Component {
    render() {
        return (<div className="row">


            <div className="col-md-4">
                <PlusMinus passengerType="Adults"
                           papCode="ADT"
                           number={this.props.numPassengers.adults}
                           updateAmountPassengers={this.props.updateAmountPassengers}
                />
            </div>


            <div className="col-md-4">
                <PlusMinus passengerType="Children"
                           papCode="CNN"
                           number={this.props.numPassengers.children}
                           updateAmountPassengers={this.props.updateAmountPassengers}
                />
            </div>


            <div className="col-md-4">
                <PlusMinus passengerType="Infants"
                           papCode="INF"
                           number={this.props.numPassengers.infants}
                           updateAmountPassengers={this.props.updateAmountPassengers}/>

            </div>
        </div>);
    }
}


export default SelectPassengers;