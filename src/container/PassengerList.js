import React, {Component} from 'react';


import PassengerCompo from '../container/Passenger/PassengerCompo';

class PassengerList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            passengers:[]
        };


    }


    render()
    {
        return(<div>


            <PassengerCompo />

            <PassengerCompo />


        </div>);
    }
}


export default PassengerList;