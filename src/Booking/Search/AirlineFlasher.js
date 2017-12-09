import React, {Component} from 'react';

class AirlineFlasher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter :0,
            intervalId :0,
            airlines : ['Turkish', 'Swiss', 'Aegean']
        };

        this.timer = this.timer.bind(this);
    }



    componentDidMount() {
        var intervalId = setInterval(this.timer, 500);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }

    timer() {
        // setState method is used to update the state
        if (this.state.counter === this.state.airlines.length) {
            this.setState({counter: 0});
        }
        else {
            this.setState({counter: this.state.counter + 1});
        }
    }

    render() {


        return (
            <div>
                {this.state.airlines[this.state.counter]}
                Component AirlineFlasher </div>

        );
    }
}

export default AirlineFlasher;


