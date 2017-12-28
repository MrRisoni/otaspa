import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import PassengerUpsale from './PassengerUpsale';

@inject('otastore')
@observer
class PassengerUpsaleList extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        let passengerDiv = [];

        this.props.otastore.passengers.forEach((ps) => {
            if (ps.active) {
                passengerDiv.push(<PassengerUpsale key={ps.id} pap={ps}/>)
            }
        });

        return (
            <div className="row">

                <div className="col-md-12">


                    <div className="row">

                        <div className="col-md-12">
                            {passengerDiv}
                        </div>
                    </div>


                </div>

            </div>);
    }
}

export default PassengerUpsaleList;


