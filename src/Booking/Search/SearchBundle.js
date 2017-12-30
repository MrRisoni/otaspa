import React, {Component} from 'react';

import CarCarousel from './CarCarousel';
import OtaSpaDatePicker from './../OtaSpaDatePicker';
import SearchBar from './SearchBar';
import AirlineFlasher from './AirlineFlasher';

import MyMapComponent from "./MyMapComponent";
import DemoApp from "./DemoApp";


class SearchBundle extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('clicked text');
    }

    render() {


        return (

            <div>
                <SearchBar/>
                <AirlineFlasher/>

                <CarCarousel/>

 <DemoApp/>

            </div>

        );
    }
}

export default SearchBundle;


