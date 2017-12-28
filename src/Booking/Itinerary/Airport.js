import React from 'react';

const Airport = function (props) {
    return (
        <div className="col-md-5">
            <div className="row">
                <div className="col-md-4">{props.iata}<br/>
                    {props.name}
                    <br/>
                    {props.city}
                </div>
                <div className="col-md-8"><b
                    className="flightTime">{props.flyTime}</b> <br/>
                    {props.day} <br/>
                    {props.date}
                </div>

            </div>
        </div>
    );

};

export default Airport;


