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
        for  (let i =0; i < 3; i++)
        {

            const key= 'seatbut_' + this.props.colLetter + (this.props.rowID + i);
            const seatID= 's'+ this.props.colLetter + (this.props.rowID + i);

            SeatDiv.push(<SeatButton key={key}
                                     seatID={seatID}/>)
        }

        return (<div className="row">{SeatDiv}</div>);
    }
}

export default SeatRow;


