import React, {Component} from 'react';

import './SeatRow.css';

import SeatButton from './SeatButton';

class SeatColumn extends Component {
    constructor(props)
    {
        super();
    }
    render() {

        let SeatDiv = [];
        const alphabet  = ['A', 'B', 'C', 'D'];
        for  (let i =0; i < 3; i++)
        {

            const key= "seatbut_" + alphabet[this.props.colID] + (this.props.rowID + i);
            SeatDiv.push(<SeatButton key={key} col={alphabet[this.props.colID]} row={(this.props.rowID + i)}/>)
        }

        return (

            <div className="row">{SeatDiv}</div>

        );
    }
}

export default SeatColumn;


