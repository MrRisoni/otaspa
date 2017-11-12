import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';


import PriceBox from './SideBar';
import PassengerList from './PassengerList';
import Itinerary from './Itinerary/Itinerary';

@inject('routing')
@inject('otastore')
@observer
class BookApp extends Component {

    constructor(props) {
        super(props);


        this.moveToPay = this.moveToPay.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

    }

    moveToPay()
    {

    }

    handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
       // console.log(windowHeight);
       // const body = document.body;
       // const html = document.documentElement;
       // const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        //console.log(windowBottom);

        this.props.otastore.changeHeight( windowBottom);

    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);

    }

    render() {
        // eslint-disable-next-line
        const { location, push, goBack } = this.props.routing;
        return (

            <div className="row">


                <div className="col-md-1"></div>

                <div className="col-md-8">

                    <Itinerary/>

                    <PassengerList/>

                    <br/>
                    <br/>

                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success btn-lg" onClick={() => push('/upsales')}>Continue</button>

                        </div>

                    </div>

                </div>


                <div className="col-md-3">
                    <PriceBox/>
                </div>



            </div>

        );
    }
}

export default BookApp;


