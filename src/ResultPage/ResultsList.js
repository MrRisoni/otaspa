import React, {Component}  from 'react';

import AirResultCompo from './AirShip/AirResultCompo';
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

        // order results by price
        this.props.results.sort(function (a, b) {
            if (  orderBy.hasOwnProperty('price') ) {
                console.log('property exists ' + orderBy.price );
                if (orderBy.price === 'asc') {
                    console.log('sort asc');
                    return (a.totalPrice > b.totalPrice) ? 1 : ((b.totalPrice > a.totalPrice) ? -1 : 0);
                }
                else {
                    console.log('sort desc');
                    return (a.totalPrice < b.totalPrice) ? 1 : ((b.totalPrice < a.totalPrice) ? -1 : 0);
                }
            }

            if (  orderBy.hasOwnProperty('stars') ) {
                console.log('property exists ' + orderBy.stars );
                if (orderBy.stars === 'asc') {
                    console.log('sort asc');
                    return (a.stars > b.stars) ? 1 : ((b.stars > a.stars) ? -1 : 0);
                }
                else {
                    console.log('sort desc');
                    return (a.stars < b.stars) ? 1 : ((b.stars < a.stars) ? -1 : 0);
                }
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
                resultListDiv.push(<hipResultCompo data={res}/>);
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
