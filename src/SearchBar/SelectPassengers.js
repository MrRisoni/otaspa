import React, {Component}  from 'react';

import PlusMinus from './PlusMinus';

class SelectPassengers extends Component {
    render()
    {
        return (<div>


            <PlusMinus passengerType="Adults"
                       papCode="ADT"
                       number={this.props.numPassengers.adults}
                       updateAmountPassengers={this.props.updateAmountPassengers}
            />

            <PlusMinus passengerType="Children"
                       papCode="CNN"
                       number={this.props.numPassengers.children}
                       updateAmountPassengers={this.props.updateAmountPassengers}
            />


            <PlusMinus passengerType="Infants"
                       papCode="INF"
                       number={this.props.numPassengers.infants}
                       updateAmountPassengers={this.props.updateAmountPassengers}/>


        </div>);
    }
}


export default SelectPassengers;