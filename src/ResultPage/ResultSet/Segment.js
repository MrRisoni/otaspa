import React, {Component}  from 'react';


class Segment extends Component {

    render() {

        const fromAirport = this.props.legData.fromAirport.substr(0,3);

        return (


            <div className="panel panel-primary">
                <div className="panel-heading"></div>
                <div className="panel-body">
                    {fromAirport} - {this.props.legData.toAirport}
                </div>
            </div>
        )
    }
}

export default Segment;