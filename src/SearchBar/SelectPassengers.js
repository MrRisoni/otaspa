import React, {Component}  from 'react';

import PlusMinus from './PlusMinus';

class SelectPassengers extends Component {
    render()
    {
        return (<div>


            <PlusMinus passengerType="Adults"/>
            <PlusMinus passengerType="Children"/>
            <PlusMinus passengerType="Infants"/>


        </div>);
    }
}


export default SelectPassengers;