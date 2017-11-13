import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('otastore')
@observer
class Insurance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedInsurance: 1
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);

    }

    handleOptionChange(ev) {
        var self = this;
        console.log(ev.target.value);

        self.setState({checkedInsurance: ev.target.value});

        this.props.otastore.updateInsurance({
            id: this.props.passengerid,
            insurance: ev.target.value
        });


    }

    render() {
        return (


                <div className="row">
                    <div className="col-md-12">
                        <div className="insuranceCard">


                        <div className="alert alert-success" role="alert">

                            <div className="row">

                                <div className="col-md-5">
                                    Select an Insurance
                                </div>

                                <div className="col-md-5"></div>

                                <div className="col-md-2">
                                    <button className="btn btn-sm btn-dark btn-block"
                                            data-toggle="collapse"
                                            data-target={`#insuranceCollapse${this.props.passengerid}`}
                                            aria-expanded="false" aria-controls="collapseExample">
                                        Toggle
                                    </button>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                <div className="collapse" id={`insuranceCollapse${this.props.passengerid}`}>

                    <div className="row">
                        <div className="col-md-12">


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
                                                       checked={this.state.checkedInsurance === ins.id}/>

                                            </div>
                                            <div className="card-footer">
                                                {ins.convertedPrice} {this.props.otastore.currency}
                                            </div>
                                        </div>

                                    </div>);
                                })}


                            </div>

                        </div>

                    </div>

                </div>



            </div>

        );
    }
}

export default Insurance;


