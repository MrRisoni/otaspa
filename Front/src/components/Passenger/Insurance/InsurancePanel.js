import React, {Component} from 'react';

import InsuranceBox from './InsuranceBox';

class InsurancePanel extends Component {
    render() {
        return (<div className="row">
                <div className="col-md-12">

                    <div className="panel panel-default">
                        <div className="panel-heading">Select Insurance</div>
                        <div className="panel-body">


                            <div className="row">
                                <InsuranceBox/>
                                <InsuranceBox/>
                                <InsuranceBox/>
                                <InsuranceBox/>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default InsurancePanel;