import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';


import PriceBox from './SideBar';
import PassengerList from './PassengerList';
import Itinerary from './Itinerary/Itinerary';

@inject('routing')
@observer
class BookApp extends Component {

    constructor(props) {
        super(props);


        this.moveToPay = this.moveToPay.bind(this);
    }

    moveToPay()
    {

    }

    render() {
        // eslint-disable-next-line
        const { location, push, goBack } = this.props.routing;
        return (

            <div className="row">


                <div className="col-md-1"></div>

                <div className="col-md-6">

                    <Itinerary/>

                    <PassengerList/>

                    <br/>
                    <br/>

                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success btn-lg" onClick={() => push('/pay')}>Continue</button>

                        </div>

                    </div>

                </div>


                <div className="col-md-4">
                    <PriceBox/>
                </div>



            </div>

        );
    }
}

export default BookApp;


