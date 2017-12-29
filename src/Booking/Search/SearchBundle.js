import React, {Component} from 'react';

import CarCarousel from './CarCarousel';
import OtaSpaDatePicker from './../OtaSpaDatePicker';
import SearchBar from './SearchBar';
import AirlineFlasher from './AirlineFlasher';

import MyMapComponent from "./MyMapComponent";


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

                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />


            </div>

        );
    }
}

export default SearchBundle;


