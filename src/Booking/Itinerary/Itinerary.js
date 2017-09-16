import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


import Leg from './Leg';

@inject('otastore')
@observer
class Itinerary extends Component {
    componentDidMount() {
        this.props.otastore.processSegments();
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


