import React, {Component} from 'react';
import axios from 'axios';

import PriceBox from './components/PriceBox';
import UpsaleList from './containers/UpsaleList';
import PassengerList from './containers/PassengerList';

import FontAwesome from 'react-fontawesome';
import Modal from 'react-modal';
import Carousel from './components/Carousel';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchID: 34243233,
            loadingUpsales: 0,
            priceDifference: false,
            totalPrice: 0,
            pricing: {
                total: 0
            },
            upsales: [],
            passengers: [],
            meals: {
                appetizers: [],
                mains: [],
                desserts: [],
                drinks: []
            },
            buggages : [],
        };

        this.handleUpsales = this.handleUpsales.bind(this);
        this.handlePassengerUpdates = this.handlePassengerUpdates.bind(this);
    }

    componentDidMount() {
        var self = this;
        console.log('Mount Component');


        axios.get(this.props.apiURL + '/upsales').then(function (response) {
            console.log(response.data);
            var upsales = [];
            response.data.forEach(function (obj, index) {
                obj.selected = false;
                obj.price = parseFloat(obj.price);
                upsales.push(obj);
            });

            self.setState({upsales: upsales});
            self.setState({loadingUpsales: 1});

        }).catch(function (error) {
            console.log(error);
        });

        axios.get(this.props.apiURL + '/meals').then(function (response) {

            let appetizers = [];
            let mains = [];
            let desserts = [];
            let drinks = [];

            response.data.forEach(function (obj, index) {
                obj.price = parseFloat(obj.price);
                obj.title += ' ' + obj.price;
                switch (obj.meal_type_id) {
                    case 1:
                        appetizers.push(obj);
                        break;
                    case 2:
                        mains.push(obj);
                        break;
                    case 3:
                        drinks.push(obj);
                        break;
                    case 4:
                        desserts.push(obj);
                        break;
                }

            });

            self.setState({
                meals: {
                    appetizers: appetizers,
                    desserts: desserts,
                    mains : mains,
                    drinks:drinks
                }
            });


        }).catch(function (error) {
            console.log(error);
        });

        setInterval(function () {
            console.log('1');
            axios.get(this.props.apiURL + '/pricechange').then(function (response) {
            }).catch(function (error) {
                console.log(error);
                self.setState({priceDifference: false});
            });
        }.bind(this), 10000);


    }


    handlePassengerUpdates(passengers_state)
    {
        var self = this;
        console.log('Passenger updates');
        console.log(passengers_state);

        var apz = passengers_state.upsales.meals.appetizer;
        console.log('selected appetizer ' + apz);

        console.log(self.state.meals.appetizers);

       for (var i=0 ; i < this.state.meals.appetizers.length; i++) {
            console.log(' loop ');
            console.log(this.state.meals.appetizers[i]);
            if ( this.state.meals.appetizers[i].id == apz) {
                console.log('March');
                let pricingNew = this.state.totalPrice;
                pricingNew += this.state.meals.appetizers[i].price;
                self.setState({totalPrice: pricingNew});
            }
        }

    }



    handleUpsales(upsale_id, checked) {
        var self = this;
        console.log('App Component Bought ' + upsale_id + ' is ' + checked);

        let upsalesNew = this.state.upsales;
        for (let i = 0; i < upsalesNew.length; i++) {
            if (upsalesNew[i].id === upsale_id) {
                console.log('Price of upsale ' + upsalesNew[i].price);
                upsalesNew[i].selected = true;
                let pricingNew = this.state.totalPrice;
                if (checked) {
                    pricingNew += upsalesNew[i].price;
                }
                else {
                    pricingNew -= upsalesNew[i].price;
                }

                console.log(pricingNew);
                self.setState({totalPrice: pricingNew});
                self.setState({upsales: upsalesNew});

            }
        }
    }

    render() {
        return (
            <div className="row">

                <div className="col-md-10">

                    {/* start panel */}
                    <div className="row">
                        <div className="col-md-10">

                            <div className="panel panel-default">
                                <div className="panel-body">Panel Content</div>
                                <div className="panel-footer">Panel Footer</div>
                            </div>
                        </div>
                    </div>
                    {/* end panel */}


                    <PassengerList meals={this.state.meals} updatePassenger={this.handlePassengerUpdates}/>


                    <Modal
                        isOpen={this.state.priceDifference}
                    >
                        <h1>Modal Content</h1>
                        <p>Etc.</p>
                    </Modal>


                    {/*  while loading display spinner  */}
                    { (this.state.loadingUpsales === 0) ?
                        <FontAwesome
                            className='fa-spinner'
                            name='spinner'
                            size='4x'
                            spin
                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                        />
                        : '' }

                    <UpsaleList AppHandler={this.handleUpsales} upsales={this.state.upsales}/>

                    <Carousel title="Select Car" url="http://buyersguide.caranddriver.com/media/assets/submodel/7368.jpg"/>

                    <Carousel title="Select Hotel" url="http://www.hotel-r.net/im/hotel/es/hotel-room-19.jpg" />


                </div>


                <div className="col-md-2 ">
                    <PriceBox total={this.state.totalPrice} upsales={this.state.upsales}/>
                </div>

            </div>
        );
    }
}

export default App;
