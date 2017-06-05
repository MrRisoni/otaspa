import React, {Component} from 'react';


import PassengerCompo from './/Passenger/PassengerCompo';

class PassengerList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            passengers:[],
            count : 2
        };


    }


    render()
    {
        let passengersdiv = [];

        for (var i =0 ; i < this.state.count; i++)
        {
            passengersdiv.push(<PassengerCompo id={i+1}/>)
        }
        return(<div>


            {passengersdiv}


        </div>);
    }
}


export default PassengerList;