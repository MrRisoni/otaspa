import React, { Component } from 'react';

class Leg extends Component
{
    render()
    {
        return(<div className="row">
            <div className="col-md-10">

                {this.props.segments.to}


            </div>
        </div>)
    }
}

export default Leg;