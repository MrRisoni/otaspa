import React, {Component} from 'react';


import Pay from '../components/Pay';
import Contact from '../components/Contact';
import PriceBox from "../old/containers/PriceBox";


class MasterApp extends Component {
    render()
    {
        return (<div>

            itinerary details
            pricebox ???

            <PriceBox/>
            <Contact/>
            <Pay/>


        </div>)
    }
}

export default MasterApp;