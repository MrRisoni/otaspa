import React, {Component} from 'react';


class SeatButton extends Component {
    constructor(props)
    {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        console.log("Click seat " + this.props.col + ' ' + this.props.row);
    }
    render() {

        let classAvailability = (Math.floor(Math.random() * 100) + 1) > 30 ? "btn-primary" : "btn-default";
        classAvailability += " btn ";
        return (

            <div className="col-md-1">
                <button onClick={this.handleClick} className={classAvailability}>
               </button>
            </div>

        );
    }
}

export default SeatButton;


