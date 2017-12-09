import React, {Component} from 'react';

import CarCarousel from './CarCarousel';
import OtaSpaDatePicker from './../OtaSpaDatePicker';
import SearchBar from "./SearchBar";
import SimpleExample from "./SimpleExample";
import AirlineFlasher from "./AirlineFlasher";


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
                <SimpleExample/>
            </div>

        );
    }
}

export default SearchBundle;


