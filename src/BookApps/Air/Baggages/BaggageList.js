import React, {Component} from 'react';

import BaggageLeg from './BaggageLeg';


class BaggageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            buttonName: 'Hide',
            buttonClass: 'btn btn-xs btn-warning'
        };

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


    render() {

        if (!this.props.upgradedFare) {
            return (<div className="row">
                <div className="col-md-12">


                    <div className="panel panel-primary">
                        <div className="panel-heading">


                            <div className="row">

                                <div className="col-md-5">
                                    Select Baggages
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

                                        <BaggageLeg papid={this.props.papid}
                                                    legTitle={'ATH-MUC'}
                                                    bags={this.props.bagInfo}
                                                    legType="dep"
                                                    updateAppBags={this.props.updateAppBags}/>

                                        <BaggageLeg papid={this.props.papid}
                                                    legTitle={'MUC-ATH'}
                                                    bags={this.props.bagInfo}
                                                    legType="ret"
                                                    updateAppBags={this.props.updateAppBags}/>


                                    </div>)}


                        </div>
                    </div>

                </div>
            </div>);
        }
        else {
            return (<div className="row">
                <div className="col-md-12">
                </div>
            </div>);


        }
    }
}


export default BaggageList;

