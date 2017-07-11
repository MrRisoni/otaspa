import React, {Component} from 'react';


import PassengerCompo from './/Passenger/PassengerCompo';

class PassengerList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let passengersdiv = [];

        for (var i = 0; i < this.props.types.length; i++) {
            passengersdiv.push(<PassengerCompo id={i + 1}
                                               bagInfo={this.props.bagInfo}
                                               type={this.props.types[i]}
                                               updateAppBags={this.props.updateAppBags}
                                               updateFareState={this.props.updateFareState}
                                               fareInfo={this.props.fareInfo}
                                               insuranceInfo={this.props.insuranceInfo}
                                               updateNames={this.props.updateNames}

            />)
        }
        return (<div>

            {passengersdiv}

        </div>);
    }
}


export default PassengerList;
