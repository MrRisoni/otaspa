import React, {Component} from 'react';


import PassengerCompo from '../components/Passenger/PassengerCompo';

class PassengerList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            passengers:[]
        };

        this.updatePassengers = this.updatePassengers.bind(this);

    }

    updatePassengers(data)
    {
        console.log('Component PassengerList ');
        console.log(data);

        this.props.updatePassenger(data);
    }

    render()
    {
        return(<div>

            <PassengerCompo meals={this.props.meals}
                            updatePassengers={this.updatePassengers}
                            baggages={this.props.baggages}
            />


            <PassengerCompo meals={this.props.meals}
                            updatePassengers={this.updatePassengers}
                            baggages={this.props.baggages}
            />



        </div>);
    }
}


export default PassengerList;