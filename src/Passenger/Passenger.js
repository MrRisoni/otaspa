import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


@inject('otastore')
class Passenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMe: true,
            label: 'Hide'
        };

        this.handleChange = this.handleChange.bind(this);
        this.removeMe = this.removeMe.bind(this);
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        var self = this;
        const show = !self.state.showMe;
        const label = (show) ? 'Hide' : 'Show';

        self.setState({showMe: show, label: label});

    }

    removeMe() {
        this.props.otastore.removePassenger(this.props.pap.id);

    }

    handleChange(ev) {
        console.log('Change passenger type');
        console.log(ev.target.value);
        this.props.otastore.changePaxType({id: this.props.pap.id, type: ev.target.value});
    }

    render() {
        return (
            <div className="row passengerCompo">
                <div className="col-md-12">


                    <div className="card bg-light">
                        <div className="card-header">

                            <div className="row">

                                <div className="col-md-5">
                                    Passenger # {this.props.pap.humanID}
                                </div>

                                <div className="col-md-5"></div>

                                <div className="col-md-2">
                                    <button className="btn btn-sm btn-dark btn-block"
                                            onClick={this.toggle}> {this.state.label} </button>
                                </div>

                            </div>
                        </div>


                        {this.state.showMe &&
                        <div>
                            <div className="card-body">


                                <select className="form-control" onChange={this.handleChange}>

                                    <option key="ADT" value="ADT">ADT</option>
                                    <option key="CNN" value="CNN">CNN</option>
                                    <option key="INF" value="INF">INF</option>


                                </select>

                            </div>


                            <div className="card-footer">

                                <div className="row">
                                    <div className="col-md-4 offset-md-4">

                                        <button className="btn btn-primary btn-sm btn-danger" onClick={this.removeMe}>
                                            Remove this Passenger
                                        </button>


                                    </div>
                                </div>

                            </div>

                        </div>
                        }


                    </div>


                </div>

            </div>

        );
    }
}

export default Passenger;


