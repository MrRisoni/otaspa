import React, {Component} from 'react';

import BaggageLeg from './BaggageLeg';

class Baggages extends Component {
    render() {
        return (<div className="row">
            <div className="col-md-12">

                <div className="row">

                    <BaggageLeg/>

                    <BaggageLeg/>

                </div>

            </div>
        </div>);
    }
}


export default Baggages;