import React, {Component} from 'react';


class Airline extends Component {

    constructor(props) {
        super(props);

         }

    render() {
        return (


            <div classNameName="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header bg-info ">

                            <div className="row">

                                <div className="col-md-4">
                                    {this.props.package.carrier}
                                </div>
                                <div className="col-md-5"></div>
                                <div className="col-md-2">
                                    <button className="btn btn-sm btn-dark btn-block"> Show
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header"></div>
                            <div className="card-body">


                                <div className="row">
                                    <div className="col-md-5">
                                        Pick service
                                    </div>
                                    <div className="col-md-7"><select className="form-control">
                                        <option value="Light">
                                            Light
                                        </option>
                                    </select></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Airline;


