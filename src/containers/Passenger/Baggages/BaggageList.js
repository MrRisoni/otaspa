import React, {Component} from 'react';

import BaggageLeg from './BaggageLeg';


class BaggageList extends Component {
    render() {

        if (!this.props.upgradedFare) {
            return (<div className="row">
                <div className="col-md-12">


                    <div className="panel panel-primary">
                        <div className="panel-heading">Select Baggages</div>
                        <div className="panel-body">

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


                            </div>


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

