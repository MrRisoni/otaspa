import React, {Component} from 'react';

class Airport extends Component
{
    render()
    {
        return( <div className="col-md-6">

            <div className="row">
                <div className="col-md-4">
            {this.props.IATA_code} <br/>
            {this.props.name}
                </div>

                <div className="col-md-8">
                    <b className="flightTime">{this.props.flyTime}</b> <br/>
                    {this.props.flyDate} <br/>
                    <p className="gmtdiff"> GMT{this.props.gmt} </p>
                </div>

                </div>



        </div>);
    }

}

export default Airport