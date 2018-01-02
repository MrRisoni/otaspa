import React, {Component} from 'react';


class SeatButton extends Component {
    constructor(props)
    {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        console.log("Click seat " + this.props.seatLetter + ' ' + this.props.seatNumber );
    }
    render() {

        let classAvailability = (Math.floor(Math.random() * 100) + 1) > 30 ? "seatAvailable" : "seatTaken";
        classAvailability += "  seatButton ";
        return (
            <div className={classAvailability}
                 onClick={this.handleClick} >
            </div>);
    }
}

export default SeatButton;


