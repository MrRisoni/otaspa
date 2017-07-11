import React, {Component} from 'react';


class UpgradeFare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption : 'normal'
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
    }


    handleOptionChange (ev) {
        var self = this;
        console.log(ev.target.value);
        console.log('Fare change for pap ' + this.props.papid);

        self.setState({
            selectedOption: ev.target.value
        });

        this.props.updateFareState({ papid : this.props.papid,  fare:ev.target.value});

    }

    render() {
        return (<div className="row">
                <div className="col-md-12">

                    <div className="panel panel-default">
                        <div className="panel-heading">Select Fare</div>
                        <div className="panel-body">


                            <div className="row">


                                <div className="col-md-6">

                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <p>{this.props.fareInfo[0].description}</p>
                                            <input type="radio" value="light"
                                                   checked={this.state.selectedOption === 'light'}
                                                   onChange={this.handleOptionChange}/>
                                        </div>
                                    </div>
                                </div>




                                <div className="col-md-6">

                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <p>{this.props.fareInfo[1].description}</p>
                                            <input type="radio" value="flex"
                                                   checked={this.state.selectedOption === 'flex'}
                                                   onChange={this.handleOptionChange}/>
                                        </div>
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




export default UpgradeFare;
