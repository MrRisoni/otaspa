import React, {Component} from 'react';

import SeatRow from './SeatRow';

class SeatColumn extends Component {
    constructor(props)
    {
        super();
    }
    render() {


        let RowDiv = [];

        for  (let i =0; i <35; i++)
        {
            let key = "col_" + this.props.colNo + "_row_" + i;
            // how many rows in the fuselage
            RowDiv.push(<SeatRow key={key}
                                 colNo={this.props.colNo}
                                 seatNumber={this.props.seatNumber}
                                 colLetter={this.props.colLetter}
                                 rowID={i}/>)
        }

        return (
            <div className="col-md-3">{RowDiv}</div>
        );
    }
}

export default SeatColumn;


