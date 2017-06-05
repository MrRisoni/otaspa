import React, {Component} from 'react';



{/* import Baggages from './Baggages/Baggage';
import FarePanel from './UpgradeFare/FarePanel';
import  InsurancePanel from './Insurance/InsurancePanel';

import Names from './Personal/Names';
import Passport from "./Personal/Passport";
*/}


import Names from './Personal/Names';



class PassengerCompo extends Component {
    constructor(props) {
        super(props);

    }




    componentDidMount() {

    }

    render() {
        return (<div className="row">
            <div className="col-md-10">

                <div className="panel panel-default">
                    <div className="panel-heading">Passenger # {this.props.id} {this.state.personal.fullname}</div>
                    <div className="panel-body">


                        <Names/>

                        {/*   <Passport/>


                        <InsurancePanel/>

                        <Baggages />

                        <FarePanel/>

*/}

                    </div>
                </div>
            </div>
        </div>)
    }
}

export default PassengerCompo;