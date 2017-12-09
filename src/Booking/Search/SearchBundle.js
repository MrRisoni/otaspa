import React, {Component} from 'react';

import CarCarousel from './CarCarousel';
import OtaSpaDatePicker from './../OtaSpaDatePicker';
import SearchBar from "./SearchBar";
import SimpleExample from "./SimpleExample";


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
                <SimpleExample/>
            </div>

        );
    }
}

export default SearchBundle;


