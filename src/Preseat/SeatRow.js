import React, {Component} from 'react';

import './SeatRow.css';

import SeatButton from './SeatButton';

class SeatColumn extends Component {

    render() {

        let SeatDiv = [];

        for  (let i =0; i < 3; i++)
        {
            const key= "seatbut_" + this.props.colID + this.props.rowID;
            SeatDiv.push(<SeatButton key={key}/>)
        }

        return (

            <div className="row">{SeatDiv}</div>

        );
    }
}

export default SeatColumn;


