import React, {Component} from 'react';

import BaggageLeg from './BaggageLeg';

class Baggage extends Component {
    render() {
        return (<div className="row">
            <div className="col-md-12">

                <div className="row">

                    <div className="panel panel-default">
                        <div className="panel-heading">Select Baggages</div>
                        <div className="panel-body">

                            <div className="row">

                                <BaggageLeg legTitle={'ATH-MUC'}/>
                                <BaggageLeg legTitle={'MUC-ATH'}/>



                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </div>);
    }
}


export default Baggage;