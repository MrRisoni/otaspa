import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';


import Itinerary from './containers/Trip/Itinerary';
import UpsaleList from './containers/UpsaleList';
import PassengerList from './containers/PassengerList';
import PriceBox from './containers/PriceBox';


class ReduxApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            upsales: {
                baggages: [],
                extras :  [
                    {
                        id: 1,
                        title: 'SMS',
                        price: 1.5,
                        selected: false
                    },
                    {
                        id: 2,
                        title: 'Web check-in',
                        price: 3,
                        selected: false
                    }
                ]
            },
            bagInfo: [
                {
                    title: "23x45x34 23KG",
                    price: 22
                },
                {
                    title: "23x45x34 15KG",
                    price: 12
                }
            ],
            types: ['ADT', 'ADT', 'CNN'],
            netPrices: [
                {
                    type: 'ADT',
                    price: 125.68
                },
                {
                    type: 'CNN',
                    price: 85.00
                }
            ],
            totalPrice: 0,




        };

        this.updateAppState = this.updateAppState.bind(this);

        this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
    }

    calculateTotalPrice()
    {

        console.log('Redux App');
        let self = this;

        let price =0;
        self.state.types.forEach( function (type) {

            self.state.netPrices.forEach( function (netPerType) {
                if (netPerType.type === type) {
                    price += netPerType.price;
                }
            });

        });

        self.setState({totalPrice : price});
    }


    updateAppState(data)
    {
        console.log(data);
        this.calculateTotalPrice();
    }


    componentDidMount()
    {
        this.calculateTotalPrice();
    }

    render() {
        return (
            <div>
                <div className="row">

                    <div className="col-md-10">


                        <Itinerary/>


                        <PassengerList
                            bagInfo={this.state.bagInfo}
                            updateAppState={this.updateAppState}
                            types={this.state.types}
                        />


                        {/*  while loading display spinner  */}
                        <FontAwesome
                            className='fa-spinner'
                            name='spinner'
                            size='4x'
                            spin
                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                        />


                        <UpsaleList upsales={this.state.upsales.extras}/>


                    </div>


                    <div className="col-md-2 ">
                        <PriceBox upsales={this.state.upsales}
                                total={this.state.totalPrice}/>
                    </div>

                </div>

            </div>
        );
    }
}


export default  ReduxApp

