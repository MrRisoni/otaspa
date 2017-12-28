import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';

import PriceBox from './SideBar';
import PassengerList from './Passengers/PassengerList';
import Itinerary from './Itinerary/Itinerary';
import axios from "axios/index";
import FontAwesome from 'react-fontawesome';

import './PassengerPage.css';
import ValidatePassengers from './Passengers/ValidatePassengers';


@inject('routing')
@inject('otastore')
@observer
class BookApp extends Component {

    constructor(props) {
        super(props);

        this.state= {
            fetchedCountries:false
        };

        this.moveToUpsales = this.moveToUpsales.bind(this);

        this.handleScroll = this.handleScroll.bind(this);

    }

    moveToUpsales()
    {
        // eslint-disable-next-line
        const valData = new ValidatePassengers();

        const { location, push, goBack } = this.props.routing;
        if (valData.validate(this.props.otastore.passengers)) {
            push('/upsales');
        }

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

    componentWillMount() {
        var self = this;
        console.log('mounting...');
        let settings = require('../env_settings');

        let api = settings.BACK_END_URL;
        console.log(api);

        axios.get(api + '/api/countries')
            .then(function (response) {
                console.log(response.data);
                self.props.otastore.setCountries(response.data);

                self.setState({fetchedCountries:true});

            })
            .catch(function (error) {
                console.log(error);
            });


    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    render() {


           if (this.state.fetchedCountries) {
                return (

                    <div className="row">

                        <div className="col-md-8 offset-md-1">

                            <Itinerary/>


                            <div className="alert alert-primary" role="alert">
                                <div className="row">
                                    <div className="col-md-3">
                                        Fill in the passenger data
                                    </div>

                                    <div className="col-md-2 offset-md-7">
                                        <button className="btn btn-sm btn-dark btn-block"
                                                data-toggle="collapse"
                                                data-target={`#passengerListCollapse`} aria-expanded="false"
                                                aria-controls="collapseExample">
                                            Toggle
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <PassengerList/>

                            <br/>

                            <div className="row">
                                <div className="col-md-4">
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-success btn-lg" onClick={this.moveToUpsales}>Continue
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <PriceBox/>
                        </div>
                    </div>
                );
            }
            else {
               return(<FontAwesome
                   className='super-crazy-colors'
                   name='spinner'
                   size='4x'
                   spin
                   style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
               />)
           }
    }
}

export default BookApp;


