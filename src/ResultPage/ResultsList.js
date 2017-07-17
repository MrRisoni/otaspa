import React, {Component}  from 'react';

import AirResultCompo from './AirShip/AirResultCompo';
import HotelResultCompo from './Hotel/HotelResultCompo';

class ResultsList extends Component {
    constructor(props){
        super(props);

        this.isFiltered = this.isFiltered.bind(this);
    }

    isFiltered()
    {
        return false;
    }

    render() {
        console.log('ResultList Component');
        console.log(this.props.results);

        let  resultListDiv = [];

        if (this.props.product === 'air') {
            {this.props.results.forEach( function (res) {
                resultListDiv.push(<AirResultCompo data={res}/>);
            })}
        }

        if (this.props.product === 'hotel') {
            {this.props.results.forEach( function (res) {
                resultListDiv.push(<HotelResultCompo data={res}/>);
            })}
        }


        return (<div>


            {resultListDiv}

        </div>)
    }
}

export default ResultsList;
