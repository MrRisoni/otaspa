import React, {Component} from 'react';

import FareCarousel from './FareCarousel';

class UpgradeFare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMe: false,
            label: 'Show'
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

            <div className="row">
                <div className="col-md-12">

                    <div className="upgradefare">

                        <div className="alert alert-success" role="alert">


                            <div className="row">

                                <div className="col-md-5">
                                    Upgrade your seat!
                                </div>

                                <div className="col-md-5"></div>

                                <div className="col-md-2">
                                    <button className="btn btn-sm btn-dark btn-block"
                                            onClick={this.toggleMe}> {this.state.label} </button>
                                </div>


                            </div>

                        </div>


                        <FareCarousel/>


                    </div>
                </div>
            </div>

        );
    }
}

export default UpgradeFare;


