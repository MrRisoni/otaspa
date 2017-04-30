import React, {Component} from 'react';

import BaggageLeg from './BaggageLeg';

class Baggages extends Component {
    render() {
        return (<div className="row">
            <div className="col-md-12">

                <div className="row">

                    <BaggageLeg data={this.props.data} freeBuggage={false} legTitle="Dep"/>

                    <BaggageLeg data={this.props.data} freeBuggage={true} legTitle="Ret"/>

                </div>

            </div>
        </div>);
    }
}


export default Baggages;