import React, {Component} from 'react';

import InsuranceBox from './InsuranceBox';

class InsurancePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 0
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange() {

    }

    render() {
        return (<div className="row">
                <div className="col-md-12">

                    <div className="panel panel-default">
                        <div className="panel-heading">Select Insurance</div>
                        <div className="panel-body">

                            <div className="row">
                                {this.props.insuranceInfo.map((item, index) => {
                                    return (<InsuranceBox data={item}/>)
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