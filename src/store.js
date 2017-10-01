import {observable, action, computed} from 'mobx';
import moment from 'moment';

class OtaStore {


    @observable departRoute = 'RHO-LHR';
    @observable returnRoute = 'LGW-RHO';

    @observable
    itinerary = {
        info: {
            departure: {
                from : '',
                to: '',
                depDate: '',
                retDate: '',
                stops: 0,
                waitTime: { hours :0, mins :0},
                durationTime: { hours :0, mins :0}
            },
            return: {
                from : '',
                to: '',
                depDate: '',
                retDate: '',
                stops: 0,
                waitTime: { hours :0, mins :0},
                durationTime: { hours :0, mins :0}
            }

        },
        depSegments: [
            {
                fromCity: "Rhodes",
                toCity: "Athens",
                fromAirport: "RHO, Diagoras Airport",
                toAirport: "ATH, Eleftherios Venizelos Intl Arpt",
                depDateTime: "2017-09-23T10:10:00+03:00",
                arrDateTime: "2017-09-23T10:55:00+03:00",
                airline: "FR,Ryanair"
            },
            {
                fromCity: "Athens",
                toCity: "Paris",
                fromAirport: "ATH, Eleftherios Venizelos Intl Arpt",
                toAirport: "CDG, Charles De Gaul Intl Arpt",
                depDateTime: "2017-09-23T14:00:00+03:00",
                arrDateTime: "2017-09-23T19:00:00+01:00",
                airline: "AF,Air France"
            },
            {
                fromCity: "Paris",
                toCity: "London",
                fromAirport: "CDG, Charles De Gaul Intl Arpt",
                toAirport: "LHR, Heathrow London Intl Arpt",
                depDateTime: "2017-09-24T00:00:00+01:00",
                arrDateTime: "2017-09-24T00:30:00+00:00",
                airline: "BA,British Airways"
            }
        ],
        retSegments: [
            {
                fromCity: "London",
                toCity: "Athens",
                fromAirport: "LGW, Gatwick Airport",
                toAirport: "ATH, Eleftherios Venizelos Intl Arpt",
                depDateTime: "2017-10-03T10:10:00+03:00",
                arrDateTime: "2017-10-03T10:55:00+03:00",
                airline: "FR,Raynair"
            },
            {
                fromCity: "Athens",
                toCity: "Rhodes",
                fromAirport: "ATH, Eleftherios Venizelos Intl Arpt",
                toAirport: "RHO, Diagoras Airport",
                depDateTime: "2017-10-03T16:00:00+03:00",
                arrDateTime: "2017-10-03T16:55:00+03:00",
                airline: "A3,Aegean Airways"
            }
        ]
    };


    @action
    processSegments()
    {
        this.itinerary.info.departure.stops =  this.itinerary.depSegments.length -1;
        this.itinerary.info.return.stops =  this.itinerary.retSegments.length -1;

        this.itinerary.info.departure.waitTime = this.findDuration(this.itinerary.depSegments);
        this.itinerary.info.return.waitTime = this.findWaitTime(this.itinerary.depSegments);

        this.itinerary.info.departure.durationTime = this.findDuration(this.itinerary.retSegments);
        this.itinerary.info.return.waitTime = this.findWaitTime(this.itinerary.retSegments);

    }

    findDuration(segments)
    {
        const depTime = moment(segments[0].depDateTime);
        const lastseg = segments.length -1;
        const arrTime = moment(segments[lastseg].arrDateTime);


        let durReturn = arrTime.diff(depTime) / (1000 * 60);

        return {
            hours: Math.floor(durReturn / 60),
            minutes: durReturn % 60
        }
    }

    findWaitTime(segments){
        let wait=0;

        for (let s =0; s < segments.length -1; s++)
        {
            let depTime = moment(segments[s].depDateTime);
            let arrTime = moment(segments[s+1].arrDateTime);

            wait += arrTime.diff(depTime) / (1000 * 60);

        }

        return {
            hours: Math.floor(wait / 60),
            minutes: wait % 60
        }
    }

    @observable currencyData = [
        {
            trigram: 'EUR',
            rate: 1
        },
        {
            trigram: 'USD',
            rate: 1.17
        },
        {
            trigram: 'NOK',
            rate: 9.36
        },
        {
            trigram: 'CHF',
            rate: 1.14
        },
        {
            trigram: 'GBP',
            rate: 0.90
        },
        {
            trigram: 'DKK',
            rate: 7.43
        }
    ];

    @observable currency = 'EUR';
    @observable currentRate = 1;

    @observable  paxTypes = [
        {
            type: 'ADT',
            name: 'Adults',
            count: 2,
            netPrice: 356,
            convertedPrice: 356

        },
        {
            type: 'CNN',
            name: 'Children',
            count: 0,
            netPrice: 275,
            convertedPrice: 275

        },
        {
            type: 'INF',
            name: 'Infant',
            count: 0,
            netPrice: 164,
            convertedPrice: 164
        }
    ];


    @observable passengers = [
        {
            id: 0,
            name:'',
            surname:'',
            humanID: 1,
            active: true,
            type: 'ADT',
            insuranceInfo :0,
            totalBags: 0,
            brandedFare: [{
                carrier: 'FR',
                selection: 0,
                price:0
            },
                {
                    carrier: 'A3',
                    selection: 0,
                    price:0
                },
                {
                    carrier: 'BA',
                    selection: 0,
                    price:0
                }],
            bags: [
                {
                    route: 'departLeg',
                    types: []
                },
                {
                    route: 'returnLeg',
                    types: []
                }
            ]
        },
        {
            id: 1,
            name:'',
            surname:'',
            humanID: 2,
            active: true,
            insuranceInfo :0,
            totalBags: 0,
            brandedFare: [{
                carrier: 'FR',
                selection: 0,
                price:0
            },
                {
                    carrier: 'A3',
                    selection: 0,
                    price:0
                },
                {
                    carrier: 'BA',
                    selection: 0,
                    price:0
                }],
            type: 'ADT',
            bags: [
                {
                    route: 'departLeg',
                    types: []
                },
                {
                    route: 'returnLeg',
                    types: []
                }
            ]
        }];


    @observable upsales = [
        {
            id: 0,
            title: 'Web-Checkin',
            price: 3.5,
            convertedPrice: 3.5,
            selected: false
        },
        {
            id: 1,
            title: 'SMS Notification',
            price: 1.5,
            convertedPrice: 1.5,
            selected: false
        }
    ];


    @action
    changeCurrency(cur) {
        this.currency = cur;

        this.currencyData.forEach((cd) => {
            if (cd.trigram === cur) {
                this.currentRate = cd.rate;
            }
        });


        this.paxTypes.forEach((px) => {
            px.convertedPrice = px.netPrice * this.currentRate;

            px.convertedPrice = px.convertedPrice.toFixed(2);
        });


        this.bagAllowance.forEach( (bagRule) => {

            bagRule.bags.forEach( (bag) => {
                bag.convertedPrice = bag.price * this.currentRate;
                bag.convertedPrice = bag.convertedPrice.toFixed(2);
            });

        });

        this.insuranceInfo.forEach( (ins) => {
            ins.convertedPrice = ins.price * this.currentRate;
            ins.convertedPrice = ins.convertedPrice.toFixed(2);

        });


        this.BrandedFares.forEach( (carrier) => {
            carrier.options.forEach( (pkg) => {
                pkg.convertedPrice = pkg.price * this.currentRate;
                pkg.convertedPrice = pkg.convertedPrice.toFixed(2);            });

        });
    }


    @action
    removePassenger(id) {
        this.reasonPassengers = '';
        let active_passengers = 0;


        this.passengers.forEach((ps) => {
            if (ps.active) {
                active_passengers++;
            }
        });

        if ((active_passengers - 1 ) <= 0) {
            this.reasonPassengers = 'You must have at least one passenger'
        }
        else {

            // check passenger limits

            let type = this.passengers[id].type;

            this.passengers[id].active = false;
            this.paxTypes.forEach((px) => {
                if (px.type === type) {
                    px.count--;
                }
            });

            // reorder passenger humanIDs
            let humanID = 1;
            this.passengers.forEach((ps) => {
                if (ps.active) {
                    ps.humanID = humanID;
                    humanID++;
                }
            })


        }
    }


    @observable bagAllowance = [{
        carrier: 'FR',
        title:' Ryanair',
        maxBags: 3,
        bags: [
            {
                id: 1,
                title: '119 × 119 × 81 cm, 15 kg',
                key: 'A77bg5HyL7tW',
                price: 12,
                convertedPrice: 12,
            },
            {
                id: 2,
                title: '119 × 119 × 81 cm, 30 kg',
                key: 'FjB9vHukA7sU',
                price: 35,
                convertedPrice: 35,
            }
        ]
        },
        {
            carrier: 'A3',
            title:' Aegean',
            maxBags: 2,
            bags: [{
                id: 1,
                title: '12KG',
                key: 'WzObjBLahEux',
                price: 12,
                convertedPrice: 12,

            },
                {
                    id: 2,
                    key: '56fzjE8uQY5Q',
                    title: '25KG',
                    price: 18,
                    convertedPrice: 18
                }
            ]
        },{
            carrier: 'BA',
            title:' British Airways',
            maxBags: 2,
            bags: [{
                id: 1,
                key: 'gxBzM9RfoeCn',
                title: '22KG',
                price: 15,
                convertedPrice: 15
            },
                {
                    id: 2,
                    key: 'QtpVPkQnQkp9',
                    title: '30KG',
                    price: 45,
                    convertedPrice: 45
                }
            ]
        }
    ];

    @observable
    insuranceInfo = [{
        id: 1,
        title: 'No insurance',
        key: 'pl2m7rgefxdE',
        price: 0,
        convertedPrice: 0
    },
        {
            id: 2,
            title: 'Globy Classic',
            key: 'tzOzzkrt1KPz',
            price: 5.16,
            convertedPrice: 5.16
        },
        {
            id: 3,
            title: 'Globy Cancellation',
            key: 'SZ273rT800q1',
            price: 15.68,
            convertedPrice: 15.68
        },
        {
            id: 4,
            title: 'Globy Schengen',
            key: 'MJWCbFKU3Z4T',
            price: 22.15,
            convertedPrice: 22.15
        }
    ];



    BrandedFares = [{
        key: "DNcuuXT5T9O9",
        carrier: "FR",
        title:' Ryanair',
        options: [
            {
                id: 1,
                name: 'Light',
                convertedPrice: 0,
                price: 0,
                packages: [{
                    title: 'cancellation'
                }]
            }
            ]
    },
        {
            key: "Y03dZvtTAwHr",
            carrier: "A3",
            title:' Aegean',
            options: [{
                id: 1,
                name: 'Light',
                convertedPrice: 0,
                price: 0,
                packages: [{
                    title: 'cancellation'
                }]
            },
                {
                    id: 2,
                    name: 'Flex',
                    convertedPrice: 15,
                    price: 15,
                    packages: [{
                        title: 'wifi'
                    }]
                }
                ]
        },
        {
            key: "9Rw5nNyMb3Ot",
            carrier: "BA",
            title:' British Airways',
            options: [{
                id: 1,
                name: 'Basic',
                convertedPrice: 0,
                price: 0,
                packages: [
                    {
                        title: 'Hand baggage',
                        status: 'notincl'
                    },
                    {
                        title: 'Checked baggage',
                        status: 'notincl'
                    },
                    {
                        title: 'Wifi',
                        status: 'notincl'
                    }
                    ,
                    {
                        title: 'Priority Boarding',
                        status: 'notincl'
                    },
                    {
                        title: 'Lounge Access',
                        status: 'notincl'
                    },
                    {
                        title: 'Cancellation',
                        status: 'notincl'
                    },
                    {
                        title: 'Amendment',
                        status: 'notincl'
                    }]
            },
                {
                    id: 2,
                    name: 'Basic Plus',
                    convertedPrice: 15,
                    price: 15,
                    packages: [
                        {
                            title: 'Hand baggage',
                            status: 'free'
                        },
                        {
                            title: 'Checked baggage',
                            status: 'free'
                        },
                        {
                            title: 'Wifi',
                            status: 'notinlc'
                        },
                        {
                            title: 'Cancellation',
                            status: 'fee'
                        },
                        {
                            title: 'Priority Boarding',
                            status: 'notinlc'
                        },
                        {
                            title: 'Lounge Access',
                            status: 'notinlc'
                        },
                        {
                            title: 'Amendment',
                            status: 'notinlc'
                        }]
                },
                {
                    id: 3,
                    name: 'Economy Premium',
                    convertedPrice: 28,
                    price: 28,
                    packages: [
                        {
                            title: 'Hand baggage',
                            status: 'free'
                        },
                        {
                            title: 'Checked baggage',
                            status: 'free'
                        },
                        {
                            title: 'Wifi',
                            status: 'free'
                        },
                        {
                            title: 'Cancellation',
                            status: 'free'
                        }
                        ,
                        {
                            title: 'Priority Boarding',
                            status: 'free'
                        },
                        {
                            title: 'Lounge Access',
                            status: 'free'
                        }
                        ,
                        {
                            title: 'Cancellation',
                            status: 'free'
                        }
                        ,
                        {
                            title: 'Amendment',
                            status: 'free'
                        }]
                },
                {
                    id: 4,
                    name: 'Economy Lux',
                    convertedPrice: 36,
                    price: 36,
                    packages: [
                        {
                            title: 'Hand baggage',
                            status: 'free'
                        },
                        {
                            title: 'Checked baggage',
                            status: 'free'
                        },
                        {
                            title: 'Wifi',
                            status: 'free'
                        },
                        {
                            title: 'Cancellation',
                            status: 'free'
                        }
                        ,
                        {
                            title: 'Priority Boarding',
                            status: 'free'
                        },
                        {
                            title: 'Lounge Access',
                            status: 'free'
                        }
                        ,
                        {
                            title: 'Cancellation',
                            status: 'free'
                        }
                        ,
                        {
                            title: 'Amendment',
                            status: 'free'
                        }]
                }
                ]
        }
        ]

    @observable outboundCarriers = ['FR', 'A3', 'BA'];
    @observable inboundCarriers = ['FR', 'A3'];


    @observable carriers = ['FR', 'A3', 'BA'];

    @observable reasonPassengers = '';

    @action
    addPassenger() {
        this.reasonPassengers = '';
        if ((this.passengers.length + 1) > 9) {
            this.reasonPassengers = 'You have exceeded the number of allowed passengers'
        }
        else {
            const new_id = this.passengers.length;
            let new_human_id = 0;


            // get the number of active passengers
            this.passengers.forEach((ps) => {
                if (ps.active) {
                    new_human_id++;
                }
            });
            new_human_id++;

            this.passengers.push({id: new_id, type: 'ADT',
                        humanID: new_human_id,
                        name:'',
                        surname:'',
                        active: true,
                        insuranceInfo :0,
                        totalBags: 0,
                        brandedFare: [{
                            carrier: 'FR',
                            selection: 0,
                            price:0
                        },
                            {
                                carrier: 'A3',
                                selection: 0,
                                price:0
                            },
                            {
                                carrier: 'BA',
                                selection: 0,
                                price:0
                            }],
                        bags: [
                            {
                                route: 'departLeg',
                                types: []
                            },
                            {
                                route: 'returnLeg',
                                types: []
                            }
                        ]
                        });

            this.paxTypes[0].count++;

            this.passengersWithinLimits()
        }

    }

    passengersWithinLimits() {
        this.reasonPassengers = '';

        let adult_count = this.paxTypes[0].count;
        let child_count = this.paxTypes[1].count;
        let infant_count = this.paxTypes[2].count;

        if (adult_count < (child_count + infant_count)) {
            this.reasonPassengers = 'More minors than adults';
        }
    }

    @action
    changePaxType(args) {
        this.passengers[args.id].type = args.type;

        this.paxTypes.forEach((px) => {

            let count = 0;
            this.passengers.forEach((ps) => {
                if (ps.type === px.type) {
                    count++;
                }
            });
            px.count = count;
        });

        this.passengersWithinLimits()
    }

    @action
    buyBrandedFare(args)
    {

        this.passengers[args.passengerid].brandedFare.forEach(( airline) => {
            if (airline.carrier == args.carrier) {
                airline.selection = args.index;

                this.BrandedFares.forEach( (brand) => {
                    if (brand.carrier == args.carrier) {
                        airline.price = brand.options[args.index].convertedPrice;
                    }
                });
            }
        });


    }

    @action
    buyBag(args) {
        console.log('store.buyBag');
        console.log(args);
        // set a limit
        let added_bag_type = {count: 1, carrier: args.carrier,
                                    id: args.bag_type_id,
                                    title: '', price: 0,
                                    key: ''};

        console.log(this.bagAllowance);

        let maxNumber = 0;

        this.bagAllowance.forEach((bgl) => {

            if (bgl.carrier === added_bag_type.carrier) {

                maxNumber = bgl.maxBags;

                bgl.bags.forEach((bg) => {
                    // console.log(bg);
                    if (bg.id == args.bag_type_id) {
                        added_bag_type.title = bg.title;
                        added_bag_type.key = bg.key;
                        console.log(bg);
                        added_bag_type.price = parseFloat(bg.convertedPrice).toFixed(2);
                    }
                });
            }
        });


        // count the number of bags for this specific carrier

        let current_count =0;
        this.passengers[args.passengerid].bags[args.leg].types.forEach( (bag, idx) => {
            if (bag.carrier === args.carrier) {
                current_count = bag.count;
            }
        });


        if (current_count < maxNumber) {

            let pos = -1;
            this.passengers[args.passengerid].bags[args.leg].types.forEach((bag, idx) => {
                if (bag.key === added_bag_type.key) {
                    pos = idx;
                }
            });

            if (pos < 0) {
                // first time passenger buys this type
                this.passengers[args.passengerid].bags[args.leg].types.push(added_bag_type);
                this.passengers[args.passengerid].totalBags++;
            }
            else {
                this.passengers[args.passengerid].bags[args.leg].types[pos].count++;
            }
        }

    }


    @action
    removeBag(args) {
        console.log('store.removeBag');
        console.log(args);


        console.log(this.passengers[args.passengerid].bags);

        this.passengers[args.passengerid].bags[args.leg].types.forEach( (bgl) => {

               if (bgl.id == args.bag_type_id) {
                   bgl.count--;
                   if (bgl.count <0 ) {
                       bgl.count =0;
                   }
               }

        });

      }


    @action updateInsurance(args)
    {
        console.log('updateInsurance');
        console.log(args);
        this.passengers[args.id].insuranceInfo= parseInt(args.insurance);
    }

    @action editName(args)
    {
        this.passengers[args.id].name = args.name;
        this.passengers[args.id].surname = args.surname;

    }




}


export default OtaStore;