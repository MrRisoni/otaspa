import React, {Component} from 'react';


class UpgradeFare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'normal',
            hidden: false,
            buttonName: 'Hide',
            buttonClass: 'btn btn-xs btn-warning'
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.toggleHide = this.toggleHide.bind(this);

    }

    toggleHide() {
        let self = this;
        let new_hidden = self.state.hidden;
        let new_buttonName = self.state.buttonName;
        let new_buttonClass = self.state.buttonClass;

        new_hidden = !new_hidden;

        if (new_hidden) {
            new_buttonName = 'Show';
            new_buttonClass = 'btn btn-xs btn-success';

        }
        else {
            new_buttonName = 'Hide';
            new_buttonClass = 'btn btn-xs btn-warning';

        }

        self.setState({hidden: new_hidden, buttonName: new_buttonName, buttonClass: new_buttonClass});

    }


    handleOptionChange(ev) {
        var self = this;

        self.setState({
            selectedOption: ev.target.value
        });

        this.props.updateFareState({papid: this.props.papid, fare: ev.target.value});

        this.props.liftFareInfoUp(ev.target.value);

    }

    render() {
        return (<div className="row">
                <div className="col-md-12">

                    <div className="panel panel-primary">
                        <div className="panel-heading">


                            <div className="row">

                                <div className="col-md-5">
                                    Upgrade Fare
                                </div>

                                <div className="col-md-2 col-md-offset-5">
                                    <button className={this.state.buttonClass}
                                            onClick={this.toggleHide}> {this.state.buttonName} </button>

                                </div>
                            </div>


                        </div>
                        <div className="panel-body">


                            {this.state.hidden ?
                                (<div></div>)

                                : (

                                    <div className="row">

                                        <div className="col-md-6">

                                            <div className="panel panel-primary">
                                                <div className="panel-body">
                                                    <p>{this.props.fareInfo[0].description}</p>
                                                    <input type="radio" value="light"
                                                           checked={this.state.selectedOption === 'light'}
                                                           onChange={this.handleOptionChange}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">

                                            <div className="panel panel-primary">
                                                <div className="panel-body">
                                                    <p>{this.props.fareInfo[1].description}</p>
                                                    <input type="radio" value="flex"
                                                           checked={this.state.selectedOption === 'flex'}
                                                           onChange={this.handleOptionChange}/>
                                                </div>
                                            </div>
                                        </div>


                                    </div> )}


                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default UpgradeFare;
