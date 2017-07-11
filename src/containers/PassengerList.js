import React, {Component} from 'react';


import PassengerCompo from './/Passenger/PassengerCompo';

class PassengerList extends Component
{
    constructor(props)
    {
        super(props);

        this.updateAppState = this.updateAppState.bind(this);
   }


    updateAppState(data)
    {
        this.props.updateAppState(data);
    }



    render()
    {
        let passengersdiv = [];

        for (var i =0 ; i < this.props.types.length ; i++)
        {
            passengersdiv.push(<PassengerCompo id={i+1}
                                               bagInfo={this.props.bagInfo}
                                               type={this.props.types[i]}
                                               updatePapList={this.props.updateAppState}
                                               updateFareState={this.props.updateFareState}
                                               fareInfo={this.props.fareInfo}
                                               updateNames={this.props.updateNames}

            />)
        }
        return(<div>

            {passengersdiv}

        </div>);
    }
}



export default PassengerList;
