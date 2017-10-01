import React, {Component} from 'react';

import './SeatRow.css';

class SeatColumn extends Component {

    render() {

        let SeatDiv = [];

        for  (let i =0; i < 3; i++)
        {
            // how many seats in a row
            SeatDiv.push(<div className="col-md-1">X</div>)
        }

        return (

            <div className="row">{SeatDiv}</div>

        );
    }
}

export default SeatColumn;


