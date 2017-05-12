import React, { Component } from 'react';

import Leg from './Leg';

class Itinerary extends Component
{
    render()
    {
        return(<div className="row">
            <div className="col-md-10">

                <div className="panel panel-default">
                    <div className="panel-heading">Itinerary Details</div>
                    <div className="panel-body">
                    </div>
                </div>

                <Leg segments={this.props.itinerary.aller}/>

            </div>
        </div>)
    }
}

export default Itinerary;