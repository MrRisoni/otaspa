import React, {Component} from 'react';


import PassengerCompo from '../components/Passenger/PassengerCompo';

class PassengerList extends Component
{
    render()
    {
        return(<div>

            <PassengerCompo meals={this.props.meals}/>
        </div>);
    }
}


export default PassengerList;