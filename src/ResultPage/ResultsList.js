import React, {Component}  from 'react';

import AirResultCompo from './AirShip/AirResultCompo';
import ShipResultCompo from './Ship/ShipResultCompo';
import HotelResultCompo from './Hotel/HotelResultCompo';


class ResultsList extends Component {
    constructor(props){
        super(props);

        this.isFiltered = this.isFiltered.bind(this);

        this.filterAndSort = this.filterAndSort.bind(this);
    }

    isFiltered()
    {
        return false;
    }

    filterAndSort()
    {
        console.log('ResultList Component');
        console.log('Order By');
        console.log(this.props.orderBy);
        let  resultListDiv = [];

        let orderBy = this.props.orderBy;

        let sortedProperty = '';
        let sortingOrder = 'asc';

        if (  orderBy.hasOwnProperty('price') ) {
            sortedProperty = 'price';
            sortingOrder =orderBy.price;
        }
        if (  orderBy.hasOwnProperty('stars') ) {
            sortedProperty = 'stars';
            sortingOrder =orderBy.stars;
        }
        if (  orderBy.hasOwnProperty('wait') ) {
            sortedProperty = 'total_waitMinutes';
            sortingOrder =orderBy.wait;
        }
        if (  orderBy.hasOwnProperty('duration') ) {
            sortedProperty = 'durationMinutes';
            sortingOrder =orderBy.duration;
        }


        console.log('key to value');
        console.log(orderBy[sortedProperty]);
        // https://stackoverflow.com/questions/4255472/javascript-object-access-variable-property-by-name-as-string

        this.props.results.sort(function (a, b) {
            if (sortingOrder === 'asc') {
                console.log('sort asc');
                return (a[sortedProperty] > b[sortedProperty]) ? 1 : ((b[sortedProperty] > a[sortedProperty]) ? -1 : 0);
            }
            else {
                console.log('sort desc');
                return (a[sortedProperty] < b[sortedProperty]) ? 1 : ((b[sortedProperty] < a[sortedProperty]) ? -1 : 0);
            }
        });

    }

    render() {


        let  resultListDiv = [];


        this.filterAndSort();

        if (this.props.product === 'air') {
            {this.props.results.forEach( function (res) {
                resultListDiv.push(<AirResultCompo data={res}/>);
            })}
        }

        if (this.props.product === 'ship') {
            {this.props.results.forEach( function (res) {
                resultListDiv.push(<ShipResultCompo data={res}/>);
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
