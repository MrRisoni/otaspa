import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


import Leg from './Leg';


@inject('ItineraryStore')
@observer
class Itinerary extends Component {
    componentWillMount() {
        this.props.ItineraryStore.processSegments();
    }
    render() {


        const itineraryInfoDepart = this.props.ItineraryStore.itinerary.info.departure;
        const itineraryInfoReturn = this.props.ItineraryStore.itinerary.info.return;

        return (
            <div className="itinerary">

                <Leg legId={0}
                     stops={itineraryInfoDepart.stops}
                     durHours={itineraryInfoDepart.durationTime.hours}
                     durMinutes={itineraryInfoDepart.durationTime.minutes}
                     waitHours={itineraryInfoDepart.waitTime.hours}
                     waitMinutes={itineraryInfoDepart.waitTime.minutes}
                     segments={this.props.ItineraryStore.itinerary.depSegments}
                     segTitle="Departure"/>


                <Leg legId={1}
                     stops={itineraryInfoReturn.stops}
                     hours={itineraryInfoReturn.durationTime.hours}
                     durHours={itineraryInfoReturn.durationTime.hours}
                     durMinutes={itineraryInfoReturn.durationTime.minutes}
                     waitHours={itineraryInfoReturn.waitTime.hours}
                     waitMinutes={itineraryInfoReturn.waitTime.minutes}
                     segments={this.props.ItineraryStore.itinerary.retSegments}
                     segTitle="Return"/>

            </div>

        );
    }
}

export default Itinerary;


