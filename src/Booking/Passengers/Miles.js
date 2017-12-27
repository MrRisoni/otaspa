import React, {Component} from 'react';

class Miles extends Component {
    render() {
        return (
            <div className="milesDiv">

                <button className="btn btn-primary" type="button" data-toggle="collapse"
                        data-target=".collapseMiles" aria-expanded="false" aria-controls="collapseMiles">
                    Add Miles Card
                </button>

                <div className="collapse collapseMiles">

                    <br/>
                    <div className="row">

                        <div className="col-md-5">
                            <label htmlFor="airline">Miles Card</label>
                            <input type="text" placeholder="Miles Card No"
                                   className="form-control"/>
                        </div>


                        <div className="col-md-6">
                            <label htmlFor="airline">Airline</label>
                            <select className="form-control">
                                <option key="" value=""></option>
                                <option key="TK" value="TK">Turkish Airlines</option>
                                <option key="A3" value="A3">Aegean</option>
                                <option key="BA" value="BA">British Airways</option>

                            </select>
                        </div>


                    </div>

                </div>


            </div>

        );
    }
}

export default Miles;


