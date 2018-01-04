import React, {Component} from 'react';

import Contact from './Contact';
import Pay from './Pay';
import SideBar from '../Booking/SideBar';


class PaymentPage extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        this.props.history.push('/final');

    }

    render() {
        return (
            <div>
                <div className="row">

                    <div className="col-md-6 offset-md-1">
                        <Contact/>
                        <Pay/>
                    </div>

                    <div className="col-md-4">
                        <SideBar/>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col-md-4 offset-md-3">
                        <button className="btn btn-success btn-lg" onClick={this.handleClick}>
                            Complete Payment
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentPage;