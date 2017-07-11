import React, {Component} from 'react';

import BaggageLeg from './BaggageLeg';


class BaggageList extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (<div className="row">
            <div className="col-md-12">


                    <div className="panel panel-default">
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
}




export default BaggageList;

