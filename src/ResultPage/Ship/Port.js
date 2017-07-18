import React, {Component} from 'react';

class Airport extends Component
{
    render()
    {
        const defaultColClass = this.props.segmentInvoked === undefined ? "col-md-6" : "col-md-12";
        const GMTClass = (this.props.diffGMT === undefined) ? "gmtdiff" : "gmtdiff gmt_warning";
        const diffTimezone = (this.props.diffGMT === undefined) ? "" : " Different timezone";


        return( <div className={defaultColClass}>
            {/* when you invoke this from segments component add col-md-12 */}

            <div className="row">
                <div className="col-md-4">
            {this.props.IATA_code} <br/>
            {this.props.name}
                </div>

                <div className="col-md-8">
                    <b className="flightTime">{this.props.flyTime}</b> <br/>
                    {this.props.flyDate} <br/>
                    <p className={GMTClass}>
                        GMT{this.props.gmt}
                        <br/>
                        {diffTimezone}
                        </p>
                </div>

                </div>



        </div>);
    }

}

export default Airport