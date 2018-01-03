import React, {Component} from 'react';


class SeatButton extends Component {
    constructor(props)
    {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        console.log('---------');
        console.log("Click seat " + this.props.seatID );
        console.log("rowID " + this.props.rowID );
    }

    render() {

        let classAvailability = (Math.floor(Math.random() * 100) + 1) > 30 ? "seatAvailable" : "seatTaken";
        classAvailability += "  seatButton col-md-1";
        return (
            <div className={classAvailability} key={this.props.seatID}
                 onClick={this.handleClick} >
            </div>);
    }
}

export default SeatButton;


