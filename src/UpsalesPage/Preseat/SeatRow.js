import React, {Component} from 'react';

import './SeatRow.css';

import SeatButton from './SeatButton';

class SeatRow extends Component {
    constructor(props)
    {
        super();
    }
    render() {

        let SeatDiv = [];
        const alphabet  = ['A', 'B', 'C', 'D'];
        for  (let i =0; i < 3; i++)
        {

            const key= 'seatbut_' + alphabet[this.props.colID] + (this.props.rowID + i);

            SeatDiv.push(<SeatButton key={key}
                                     colNo={this.props.colNo}
                                     seatNumber={this.props.seatNumber}
                                     seatLetter={this.props.colLetter}
                                     col={alphabet[this.props.colID]}
                                     row={(this.props.rowID + i)}/>)
        }

        return (

            <div className="row">{SeatDiv}</div>

        );
    }
}

export default SeatRow;


