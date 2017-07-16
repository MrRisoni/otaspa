import React, {Component}  from 'react';

import ResultLeg from './ResultLeg';

class ResultCompo extends Component {

    render() {
        return (

            <div className="panel panel-primary">
                <div className="panel-heading">Itinerary Details</div>
                <div className="panel-body">

                    <ResultLeg legs={this.props.data.departLegs}/>
                    <ResultLeg legs={this.props.data.returnLegs}/>

                </div>

                <div className="panel-footer">
                    <div className="row">
                        <div className="col-md-5">
                            Price {this.props.data.totalPrice}
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-3">
                            <button className="btn btn-sm btn-primary">Continue</button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default ResultCompo;