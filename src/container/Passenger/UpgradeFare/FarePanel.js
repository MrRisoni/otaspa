import React, {Component} from 'react';

import FareBox from './FareBox';

class FarePanel extends Component {
    render() {
        return (<div className="row">
                <div className="col-md-12">

                    <div className="panel panel-default">
                        <div className="panel-heading">Select Fare</div>
                        <div className="panel-body">


                            <div className="row">

                                <FareBox/>
                                <FareBox/>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default FarePanel;