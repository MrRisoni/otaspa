import React, {Component} from 'react';


class InsurancePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 1
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(ev) {

        var self = this;
        console.log(ev.target.value);
        self.setState({selectedOption: ev.target.value});

        console.log(this.state);

        this.props.updateAppInsurance({papid : this.props.papid , insuranceID : ev.target.value})
    }

    render() {
        return (<div className="row">
                <div className="col-md-12">

                    <div className="panel panel-default">
                        <div className="panel-heading">Select Insurance</div>
                        <div className="panel-body">

                            <div className="row">
                                {this.props.insuranceInfo.map((item, index) => {
                                    {/* Insurance Box Component */}
                                    return ( <div className="col-md-3">

                                        <div className="panel panel-default">
                                            <div className="panel-body">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <p> {item.title}</p>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-4"></div>
                                                    <div className="col-md-4">
                                                        {item.price}
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-4"></div>
                                                    <div className="col-md-4">
                                                        <input type="radio"
                                                               value={item.id}
                                                               checked={this.state.selectedOption == item.id}
                                                               onChange={this.handleOptionChange}
                                                        />
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>)
                                })}
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default InsurancePanel;