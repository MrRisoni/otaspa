import React, {Component} from 'react';

import SeatRow from './SeatRow';

class SeatColumn extends Component {

    render() {


        let RowDiv = [];

        for  (let i =0; i <35; i++)
        {
            // how many rows in the fuselage
            RowDiv.push(<SeatRow />)
        }

        return (

            <div className="col-md-3">{RowDiv}</div>
        );
    }
}

export default SeatColumn;


