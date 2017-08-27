import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('otastore')
@observer
class Insurance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMe: false,
            label: 'Hide',
            checkedInsurance :1
        };

        this.toggleMe = this.toggleMe.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);


    }

    handleOptionChange(ev)
    {
        var self = this;
        console.log(ev.target.value);

        self.setState({checkedInsurance: ev.target.value});


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
                                    <button className="btn btn-sm btn-dark btn-block"
                                            onClick={this.toggleMe}> {this.state.label} </button>
                                </div>

                            </div>

                        </div>

                        {this.state.showMe &&


                        <div className="row">


                            {this.props.otastore.insuranceInfo.map((ins) => {

                                return (<div key={ins.id} className="col-md-3">

                                    <div className="card text-center">
                                        <div className="card-header bg-warning ">

                                        </div>
                                        <div className="card-body">
                                            {ins.title}

                                           <input type="radio" value={ins.id}
                                                  onChange={this.handleOptionChange}
                                                  checked={this.state.checkedInsurance == ins.id}/>

                                        </div>
                                        <div className="card-footer">
                                            {ins.convertedPrice} {this.props.otastore.currency}
                                        </div>
                                    </div>

                                </div>);
                            })}


                        </div>

                        }

                    </div>

                </div>
            </div>

        );
    }
}

export default Insurance;


