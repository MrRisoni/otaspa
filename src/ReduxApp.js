import React, {Component} from 'react';


import Itinerary from './containers/Trip/Itinerary';
import UpsaleList from './containers/UpsaleList';
import PassengerList from './containers/PassengerList';
import PriceBox from './containers/PriceBox';


class ReduxApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            ],
            upsales: {
                baggages: [],

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
            totalNetPrice : 0,
            totalPrice: 0,




        };

        this.updateAppState = this.updateAppState.bind(this);

        this.calculateTotalPrice = this.calculateTotalPrice.bind(this);

        this.buyUpsale = this.buyUpsale.bind(this);

    }

    calculateTotalPrice()
    {

        console.log('Redux App');
        let self = this;

        let price =0;
        let totalNetPrice =0;
        self.state.types.forEach( function (type) {

            self.state.netPrices.forEach( function (netPerType) {
                if (netPerType.type === type) {
                    price += netPerType.price;
                    totalNetPrice += netPerType.price;
                }
            });

        });

        self.state.extras.map ( (upsl) => {
            if (upsl.selected) {
                price += upsl.price;
            }
        });

         self.setState({totalPrice : price});
        self.setState({totalNetPrice : totalNetPrice});

    }


    updateAppState(data)
    {
        console.log(data);
        this.calculateTotalPrice();
    }

    buyUpsale(data)
    {

        let self = this;

        console.log('App Component');
        console.log(data);

        let previousUpsales = self.state.extras;

        previousUpsales.map ( (upsl) => {
           if (upsl.id === data.id) {
               console.log('Upsale match');
               upsl.selected = data.selected
           }
        });

        self.setState({extras : previousUpsales });

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

                        <UpsaleList upsales={this.state.extras}
                                    updateApp={this.buyUpsale}/>


                    </div>


                    <div className="col-md-2 ">
                        <PriceBox
                                netPrice={this.state.totalNetPrice}
                                upsales={this.state.upsales}
                                extras={this.state.extras}
                                total={this.state.totalPrice}/>
                    </div>

                </div>

            </div>
        );
    }
}


export default  ReduxApp

