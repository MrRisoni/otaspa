import React, {Component} from 'react';

class Airport extends Component {
    render() {
        return (

            <div className="col-md-5">
                <div className="row">
                    <div className="col-md-4">{this.props.iata}<br/>
                        {this.props.name}
                    </div>
                    <div className="col-md-8"><b
                        className="flightTime">{this.props.flyTime}</b> <br/>
                        {this.props.day} <br/>
                        {this.props.date}
                        </div>

                </div>
            </div>

        );
    }
}

export default Airport;


