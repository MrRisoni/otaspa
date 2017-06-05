import React, {Component} from 'react';
import {connect} from 'react-redux';


import PassengerCompo from './/Passenger/PassengerCompo';
class PassengerList extends Component
{


    render()
    {
        let passengersdiv = [];

        for (var i =0 ; i < this.props.types.length ; i++)
        {
            passengersdiv.push(<PassengerCompo id={i+1} type={this.props.types[i]}/>)
        }
        return(<div>

            {passengersdiv}

        </div>);
    }
}


function mapStateToProps(state) {
    return {
        types : state.spa.pap_types
    }
}

export default connect(mapStateToProps)(PassengerList);
