import React, {Component} from 'react';

import Itinerary from '../old/containers/Trip/Itinerary';
import UpsaleList from '../old/containers/UpsaleList';
import PassengerList from '../old/containers/PassengerList';
import PriceBox from '../old/containers/PriceBox';
import Contact from '../components/Contact';
import Pay from '../components/Pay';


class AirApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            extras: [
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
            legs: ['ATH-MUC', 'MUC-ATH'],
            fareInfo: [{
                id: 0,
                description: 'Light',
                price: 0
            }, {
                id: 1,
                description: 'Flex',
                price: 30
            }
            ],
            insuranceInfo: [
                {
                    id: 1,
                    title: "No insurance",
                    price: 0
                },
                {
                    id: 2,
                    title: "Globy Classic",
                    price: 13.56
                },
                {
                    id: 3,
                    title: "Globy Cancellation",
                    price: 25.68
                },
                {
                    id: 4,
                    title: "Globy Schengen",
                    price: 39.45
                }
            ],
            bagInfo: [
                {
                    id: 1,
                    title: "23x45x34 23KG",
                    price: 22
                },
                {
                    id: 8,
                    title: "23x45x34 15KG",
                    price: 12
                }
            ],
            passengers: [
                {
                    id: 1,
                    surname: '',
                    name: '',
                    prefix: '',
                    insurance: 0,
                    insuranceTitle: '',
                    insurancePrice: 0,
                    fare: 0,
                    fareTitle: 'Light',
                    farePrice: 0,
                    bag: {
                        dep: '',
                        ret: ''
                    },
                    bagPrices: {
                        dep: 0,
                        ret: 0
                    }
                },
                {
                    id: 2,
                    surname: '',
                    name: '',
                    prefix: '',
                    insurance: 0,
                    insuranceTitle: '',
                    insurancePrice: 0,
                    fare: 0,
                    fareTitle: 'Light',
                    farePrice: 0,
                    bag: {
                        dep: '',
                        ret: ''
                    },
                    bagPrices: {
                        dep: 0,
                        ret: 0
                    }
                },
                {
                    id: 3,
                    surname: '',
                    name: '',
                    prefix: '',
                    insurance: 0,
                    insuranceTitle: '',
                    insurancePrice: 0,
                    fare: 0,
                    fareTitle: 'Light',
                    farePrice: 0,
                    bag: {
                        dep: '',
                        ret: ''
                    },
                    bagPrices: {
                        dep: 0,
                        ret: 0
                    }
                }
            ],
            addedLater :[],
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
            totalNetPrice: 0,
            totalPrice: 0,
            itinerary: {
                info: {
                    fromCity: 'Rhodes',
                    toCity: 'London',
                    depDate: 'Fr 23 Jun 2017',
                    retDate: 'Fr 29 Jun 2017',
                    depTime: '10:10',
                    depAirport: 'ATH',
                    arrTime: '16:00',
                    arrAirport: 'LGW',
                    duration: '07:50',
                    stops: 1,
                    roundTrip: true
                },
                aller: [
                    {
                        fromCity: 'Rhodes',
                        toCity: 'Athens',
                        fromAirport: 'Rhodes Colossus Airport',
                        toAirport: 'ATH, Eleftherios Venizelos Intl Arpt',
                        duration: '00:50',
                        depDateTime: '10:10 Freitag, 23 Jun 2017',
                        arrDateTime: '11:05 Freitag, 23 Jun 2017',
                        airline: 'Olympic Airways',
                        code: 'OA',
                        waitTime: '01:20'
                    },
                    {
                        fromCity: 'Athens',
                        toCity: 'London',
                        fromAirport: 'ATH, Eleftherios Venizelos Intl Arpt',
                        toAirport: 'LHR, London Intl Arpt',
                        duration: '02:30',
                        depDateTime: '18:20 Freitag, 23 Jun 2017',
                        arrDateTime: '20:05 Freitag, 23 Jun 2017',
                        airline: 'British Airways',
                        code: 'BA',
                        waitTime: ''
                    }
                ], retour: [
                    {
                        fromCity: 'London',
                        toCity: 'Athens',
                        fromAirport: 'LHR, London Intl Arpt',
                        toAirport: 'ATH, Eleftherios Venizelos Intl Arpt',
                        duration: '02:30',
                        depDateTime: '18:20 Freitag, 29 Jun 2017',
                        arrDateTime: '20:05 Freitag, 29 Jun 2017',
                        airline: 'British Airways',
                        code: 'BA',
                        waitTime: ''
                    },
                    {
                    fromCity: 'Athens',
                    toCity: 'Rhodes',
                    fromAirport: 'Rhodes Colossus Airport',
                    toAirport: 'ATH, Eleftherios Venizelos Intl Arpt',
                    duration: '00:50',
                    depDateTime: '10:10 Freitag, 30 Jun 2017',
                    arrDateTime: '11:05 Freitag, 30 Jun 2017',
                    airline: 'Olympic Airways',
                    code: 'OA',
                    waitTime: '14:00'
                }
                    ]

            }


        };

        this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
        this.buyUpsale = this.buyUpsale.bind(this);
        this.updateFareState = this.updateFareState.bind(this);
        this.updateAppNames = this.updateAppNames.bind(this);
        this.updateAppBags = this.updateAppBags.bind(this);
        this.updateAppInsurance = this.updateAppInsurance.bind(this);

        this.addPassenger = this.addPassenger.bind(this);
        this.removePassenger = this.removePassenger.bind(this);

    }

    addPassenger()
    {
        let self = this;
        let types = self.state.types;
        types.push('ADT');

        let passengers = self.state.passengers;

        let newid = passengers.length + 1;

        let newpap = {
                id: newid,
                surname: '',
                name: '',
                prefix: '',
                insurance: 0,
                insuranceTitle: '',
                insurancePrice: 0,
                fare: 0,
                fareTitle: 'Light',
                farePrice: 0,
                bag: {
                    dep: '',
                    ret: ''
                },
                bagPrices: {
                    dep: 0,
                    ret: 0
                }
            };

        passengers.push(newpap);

        let addedLater = self.state.addedLater;

        addedLater.push(newid);

        self.setState({types : types});
        self.setState({passengers : passengers});
        self.setState({addedLater : addedLater});

        this.calculateTotalPrice();
    }

    removePassenger(data)
    {
        var self = this;

        let types = self.state.types;
        let passengers = self.state.passengers;
        let addedLater = self.state.addedLater;

        passengers.pop();
        types.pop();
        addedLater.pop();

        self.setState({types : types});
        self.setState({passengers : passengers});
        self.setState({addedLater : addedLater});

        this.calculateTotalPrice();
    }


    calculateTotalPrice() {

        let self = this;

        let price = 0;
        let totalNetPrice = 0;
        self.state.types.forEach(function (type) {

            self.state.netPrices.forEach(function (netPerType) {
                if (netPerType.type === type) {
                    price += netPerType.price;
                    totalNetPrice += netPerType.price;
                }
            });

        });

        self.state.extras.forEach((upsl) => {
            if (upsl.selected) {
                price += upsl.price;
            }
        });

        self.state.fareInfo.forEach((fr) => {

            self.state.passengers.forEach((pap) => {

                if (pap.fare === fr.id) {
                    price += fr.price;
                }

            });
        });

        self.state.insuranceInfo.forEach((ins) => {
            self.state.passengers.forEach((pap) => {
                if (pap.insurance == ins.id) {
                    price += ins.price;
                }
            });
        });


        self.state.passengers.forEach((pap) => {
            price += pap.bagPrices.dep + pap.bagPrices.ret;
        });


        self.setState({totalPrice: price});
        self.setState({totalNetPrice: totalNetPrice});

    }


    updateAppBags(data) {
        let self = this;

        let passengers = self.state.passengers;

        passengers.forEach((pap) => {

            if (pap.id === data.papid) {

                self.state.bagInfo.forEach((bag) => {
                    if (bag.id == data.bagid) {
                        if (data.legType === 'dep') {
                            pap.bag.dep = bag.title;
                            pap.bagPrices.dep = bag.price;
                        }
                        if (data.legType === 'ret') {
                            pap.bag.ret = bag.title;
                            pap.bagPrices.ret = bag.price;
                        }
                    }
                });
            }
        });

        self.setState({passengers: passengers});

        this.calculateTotalPrice();
    }


    updateAppInsurance(data)
    {
        let self = this;

        let passengers = self.state.passengers;

        passengers.forEach((pap) => {
            if (pap.id === data.papid)   {
                if (data.insuranceID >0 ) {
                    pap.insurance = parseInt(data.insuranceID);
                }
            }
        });

        self.state.insuranceInfo.forEach((ins) => {

            passengers.forEach((pap) => {
                if (pap.insurance === ins.id) {
                    pap.insuranceTitle = ins.title;
                    pap.insurancePrice = ins.price;
                }
            });
        });

        self.setState({passengers: passengers});

        this.calculateTotalPrice();

    };

    updateFareState(data) {
        let self = this;

        let passengers = self.state.passengers;

        passengers.forEach((pap) => {
            if (pap.id === data.papid) {
                pap.fare = (data.fare === 'flex') ? 1 : 0;

                pap.fareTitle = data.fare;

                // on upgraded fare remove bags
                if (pap.fareTitle === 'flex') {

                    pap.bag.dep = '';
                    pap.bag.ret = '';

                    pap.bagPrices.dep = 0;
                    pap.bagPrices.ret = 0;

                }

                    self.state.fareInfo.forEach((fr) => {
                    if (fr.id === pap.fare) {
                        pap.farePrice = fr.price;
                    }

                });
            }
        });

        self.setState({passengers: passengers});
        this.calculateTotalPrice();
    }


    updateAppNames(data) {
        let self = this;

        let passengers = self.state.passengers;

        passengers.forEach((pap) => {

            if (pap.id === data.id) {
                pap.surname = data.surname;
                pap.name = data.name;
                pap.prefix = data.prefix;
            }
        });

        self.setState({passengers: passengers});
    }

    buyUpsale(data) {

        let self = this;

        let previousUpsales = self.state.extras;

        previousUpsales.map((upsl) => {
            if (upsl.id === data.id) {
                upsl.selected = data.selected
            }
        });

        self.setState({extras: previousUpsales});
        this.calculateTotalPrice();
    }

    componentDidMount() {
        this.calculateTotalPrice();
    }

    render() {
        return (
            <div>

                <div className="row">

                    <div className="col-md-10">

                        <Itinerary itinerary={this.state.itinerary}/>

                        <PassengerList
                            bagInfo={this.state.bagInfo}
                            types={this.state.types}
                            fareInfo={this.state.fareInfo}
                            insuranceInfo={this.state.insuranceInfo}
                            updateFareState={this.updateFareState}
                            updateNames={this.updateAppNames}
                            updateAppBags={this.updateAppBags}
                            updateAppInsurance={this.updateAppInsurance}
                            addedLater={this.state.addedLater}
                            removePassenger={this.removePassenger}
                        />

                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <button onClick={this.addPassenger} className="btn btn-primary btn-sm">Add Passenger</button>
                            </div>
                            <div className="col-md-4"></div>
                        </div>

                        <br/>

                        <UpsaleList upsales={this.state.extras}
                                    buyUpsale={this.buyUpsale}/>


                        <Contact/>

                        <Pay />

                    </div>

                    <div className="col-md-2 ">
                        <PriceBox
                            netPrice={this.state.totalNetPrice}
                            upsales={this.state.upsales}
                            extras={this.state.extras}
                            total={this.state.totalPrice}
                            fareInfo={this.state.fareInfo}
                            passengers={this.state.passengers}
                            insuranceInfo={this.state.insuranceInfo}
                            legs={this.state.legs}/>
                    </div>

                </div>

            </div>
        );
    }
}

export default  AirApp

