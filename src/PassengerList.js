import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


@inject('otastore')
@observer
class PassengerList extends Component {
    constructor(props)
    {
        super(props);

        this.addPassenger = this.addPassenger.bind(this);
    }

    addPassenger()
    {
        this.props.otastore.addPassenger();
    }
    render() {

        return (<div className="row">

            <div className="col-md-12">


                {this.props.otastore.passengers.map((ps) => {
                    return (<div> {ps.type} </div>)
                })}

            </div>


            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-primary btn-success" onClick={this.addPassenger}>Add Passenger</button>
                </div>
            </div>

        </div>);
    }
}

export default PassengerList;


