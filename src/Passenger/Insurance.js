import React, {Component} from 'react';


class Insurance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMe: true,
            label: 'Hide'
        };

        this.toggleMe = this.toggleMe.bind(this);
    }

    toggleMe() {
        var self = this;

        let showme = !self.state.showMe;
        let btn = (showme) ? 'Hide' : 'Show';
        self.setState({showMe: showme, label: btn});
    }

    render() {
        return (

            <div className="insuranceCard">

                <div className="row">
                    <div className="col-md-12">


                        <div className="alert alert-success" role="alert">

                            <div className="row">

                                <div className="col-md-5">
                                    Select an Insurance
                                </div>

                                <div className="col-md-5"></div>

                                <div className="col-md-2">
                                    <button className="btn btn-sm btn-dark btn-block"> {this.state.label} </button>
                                </div>

                            </div>

                        </div>


                        <div className="row">
                            <div className="col-md-4">

                                <div className="card text-center">
                                    <div className="card-header bg-warning ">

                                    </div>
                                    <div className="card-body">
                                        Basic card example
                                    </div>
                                    <div className="card-footer">

                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>
            </div>

        );
    }
}

export default Insurance;


