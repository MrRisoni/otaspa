import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


import Leg from './Leg';


@inject('ItineraryStore')
@observer
class Itinerary extends Component {
    componentDidMount() {
        this.props.ItineraryStore.processSegments();
    }
    render() {
        return (
            <div className="itinerary">

                <Leg leg={0}/>


                <Leg leg={1}/>

            </div>

        );
    }
}

export default Itinerary;


