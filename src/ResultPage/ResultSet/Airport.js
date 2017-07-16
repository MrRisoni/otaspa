import React, {Component} from 'react';

class Airport extends Component
{
    render()
    {
        return( <div className="col-md-4">
            {this.props.IATA_code} <br/>
            {this.props.name}

            {this.props.flyTime}
        </div>);
    }

}

export default Airport