import {observable, action} from 'mobx';
import moment from "moment/moment";

class OtaStore {

    @observable departRoute = 'RHO-LHR';
    @observable returnRoute = 'LGW-RHO';


    @observable
    priceBoxMargin =5;

    @observable
    showCarCarousel = true;

    @observable
    segmentsCities = [
        {
            fromCity: "Rhodes",
            toCity: "Athens"
        },
        {
            fromCity: "Athens",
            toCity: "Paris"
        },
        {
            fromCity: "Paris",
            toCity: "London"
        },
        {
            fromCity: "London",
            toCity: "Athens"
        },
        {
            fromCity: "Athens",
            toCity: "Rhodes"
        }
    ]

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
                depDateTime: "2018-09-23T10:10:00+03:00",
                arrDateTime: "2018-09-23T10:55:00+03:00",
                airline: "FR,Ryanair",
                img: {
                    url: "/logos/FR.png",
                    width: 100
                },
                waitTime: { hours :0, mins :0, total:0},
                durationTime: { hours :0, mins :0}
            },
            {
                fromCity: "Athens",
                toCity: "Paris",
                fromAirport: "ATH, Eleftherios Venizelos Intl Arpt",
                toAirport: "CDG, Charles De Gaul Intl Arpt",
                depDateTime: "2018-09-23T14:00:00+03:00",
                arrDateTime: "2018-09-23T19:00:00+01:00",
                airline: "AF,Air France",
                img: {
                    url: "/logos/AF.png",
                    width: 100
                },
                waitTime: { hours :0, mins :0, total:0},
                durationTime: { hours :0, mins :0}
            },
            {
                fromCity: "Paris",
                toCity: "London",
                fromAirport: "CDG, Charles De Gaul Intl Arpt",
                toAirport: "LHR, Heathrow London Intl Arpt",
                depDateTime: "2018-09-24T00:00:00+01:00",
                arrDateTime: "2018-09-24T00:30:00+00:00",
                airline: "BA,British Airways",
                img: {
                    url: "https://www.seeklogo.net/wp-content/uploads/2015/07/british-airways-logo-vector-download.jpg",
                    width: 100
                },
                waitTime: { hours :0, mins :0, total:0},
                durationTime: { hours :0, mins :0}
            }
        ],
        retSegments: [
            {
                fromCity: "London",
                toCity: "Athens",
                fromAirport: "LGW, Gatwick Airport",
                toAirport: "ATH, Eleftherios Venizelos Intl Arpt",
                depDateTime: "2018-10-03T10:10:00+03:00",
                arrDateTime: "2018-10-03T10:55:00+03:00",
                airline: "FR,Raynair",
                img: {
                    url: "/logos/FR.png",
                    width: 100
                },
                waitTime: { hours :0, mins :0, total:0},
                durationTime: { hours :0, mins :0}
            },
            {
                fromCity: "Athens",
                toCity: "Rhodes",
                fromAirport: "ATH, Eleftherios Venizelos Intl Arpt",
                toAirport: "RHO, Diagoras Airport",
                depDateTime: "2018-10-03T16:00:00+03:00",
                arrDateTime: "2018-10-03T16:55:00+03:00",
                airline: "A3,Aegean Airways",
                img: {
                    url: "/logos/A3.png",
                    width: 100
                },
                waitTime: { hours :0, mins :0, total:0},
                durationTime: { hours :0, mins :0}
            }
        ]
    };



    @observable outboundCarriers = ['FR', 'A3', 'BA'];
    @observable inboundCarriers = ['FR', 'A3'];

    @observable carriers = ['FR', 'A3', 'BA'];

    @observable currentPreasetLeg = 'Athens - Rhodes';

    currentPreasetLegId =0;

    @observable
    countries = [];

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

    @observable
    contactInfo = {
        name: '',
        surname: '',
        email: '',
        mobile:''
    };

    @observable passengers = [
        {
            id: 0,
            name:'',
            surname:'',
            dob:'',
            passport:'',
            issue:'',
            nationality:'',
            expires:'',
            humanID: 1,
            active: true,
            type: 'ADT',
            insuranceInfo :0,
            totalBags: 0,
            bags: [
                {
                    route: 'departLeg',
                    types: []
                },
                {
                    route: 'returnLeg',
                    types: []
                }
            ],
            preseat: []
        },
        {
            id: 1,
            name:'',
            surname:'',
            humanID: 2,
            dob:'',
            passport:'',
            issue:'',
            nationality:'',
            expires:'',
            active: true,
            insuranceInfo :0,
            totalBags: 0,
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
            ],
            preseat: []
        }];



    @observable bagAllowance =[];

    @observable
    insuranceInfo = [];


    @observable outboundCarriers = ['FR', 'A3', 'BA'];
    @observable inboundCarriers = ['FR', 'A3'];


    @observable carriers = ['FR', 'A3', 'BA'];

    @observable reasonPassengers = '';

    /*************  FUNCTIONS ****************/


    passengersWithinLimits() {
        this.reasonPassengers = '';

        let adult_count = this.paxTypes[0].count;
        let child_count = this.paxTypes[1].count;
        let infant_count = this.paxTypes[2].count;

        if (adult_count < (child_count + infant_count)) {
            this.reasonPassengers = 'More minors than adults';
        }
    }


    /*************  ACTIONS ****************/

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
            });

            for ( var i =0 ; i < this.passengers.length; i++) {

                if (this.passengers[i].active && this.passengers[i].type === 'ADT') {
                    this.contactInfo.surname = this.passengers[i].surname;
                    this.contactInfo.name = this.passengers[i].name;

                    break;
                }
            }





        }
    }



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
                        dob:'',
                        passport:'',
                        issue:'',
                        nationality:'',
                        expires:'',
                        bags: [
                            {
                                route: 'departLeg',
                                types: []
                            },
                            {
                                route: 'returnLeg',
                                types: []
                            }
                        ],
                        preseat: []
                        });

            this.paxTypes[0].count++;

            this.passengersWithinLimits()
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
                    if (bg.id === args.bag_type_id) {
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

               if (bgl.id === args.bag_type_id) {
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
        this.passengers[args.id].insuranceInfo= parseInt(args.insurance,10);

    }

    @action
    editPaxElement(args)
    {
        this.passengers[args.id][args.property] = args.value;
    }



    @action
    setCountries(data)
    {
        console.log('Setting countries');
        this.countries = data;
        console.log(this.countries.length);
    }

    @action
    setInsurance(data)
    {
        this.insuranceInfo = data;
    }

    @action
    setBags(data)
    {
        this.bagAllowance = data;
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


    @action
    toggleCarCarousel()
    {
        this.showCarCarousel = !this.showCarCarousel;
    }

    @action changeHeight(newHeight){

        // console.log(newHeight);
        if (newHeight <= 622) {
            this.priceBoxMargin = 5;
        }
        else {
            this.priceBoxMargin = (165.0/(1200 - 622)) *( newHeight  - 622) ;
            this.priceBoxMargin = 3 * this.priceBoxMargin;
            this.priceBoxMargin = parseInt(this.priceBoxMargin);
        }
        // console.log(this.priceBoxMargin);
    }

    @action
    processSegments()
    {
        this.itinerary.info.departure.stops =  this.itinerary.depSegments.length -1;
        this.itinerary.info.return.stops =  this.itinerary.retSegments.length -1;

        this.itinerary.info.departure.durationTime = this.findDuration(this.itinerary.depSegments);
        this.itinerary.info.return.durationTime = this.findDuration(this.itinerary.retSegments);

        this.itinerary.info.departure.waitTime = this.findWaitTime(this.itinerary.depSegments);
        this.itinerary.info.return.waitTime = this.findWaitTime(this.itinerary.retSegments);


        for (var i =0; i< this.itinerary.depSegments.length; i++){

            let depTime = moment(this.itinerary.depSegments[i].depDateTime);
            let arrTime = moment(this.itinerary.depSegments[i].arrDateTime);

            const durSeg = arrTime.diff(depTime) / (1000 * 60);

            this.itinerary.depSegments[i].durationTime = {
                hours: Math.floor(durSeg / 60),
                minutes: durSeg % 60
            }
        }

        for (i =0; i< this.itinerary.retSegments.length; i++){

            let depTime = moment(this.itinerary.retSegments[i].depDateTime);
            let arrTime = moment(this.itinerary.retSegments[i].arrDateTime);

            const durSeg = arrTime.diff(depTime) / (1000 * 60);

            this.itinerary.retSegments[i].durationTime = {
                hours: Math.floor(durSeg / 60),
                minutes: durSeg % 60
            }
        }




        // wait time
        for (i =0; i< this.itinerary.depSegments.length -1; i++){

            let arrTime = moment(this.itinerary.depSegments[i].arrDateTime);
            let depTime = moment(this.itinerary.depSegments[i +1].depDateTime);

            const waitSeg = depTime.diff(arrTime) / (1000 * 60);

            this.itinerary.depSegments[i].waitTime = {
                hours: Math.floor(waitSeg / 60),
                minutes: waitSeg % 60,
                total: waitSeg
            }
        }


        for (i =0; i< this.itinerary.retSegments.length -1; i++){

            let arrTime = moment(this.itinerary.retSegments[i].arrDateTime);
            let depTime = moment(this.itinerary.retSegments[i +1].depDateTime);

            const waitSeg = depTime.diff(arrTime) / (1000 * 60);

            this.itinerary.retSegments[i].waitTime = {
                hours: Math.floor(waitSeg / 60),
                minutes: waitSeg % 60,
                total: waitSeg
            }
        }


    }




    @action
    nextPreseatLeg()
    {

        this.currentPreasetLegId++;
        if (this.currentPreasetLegId === this.segmentsCities.length)
        {
            this.currentPreasetLegId = 0;
        }

        console.log(this.currentPreasetLegId);
        this.currentPreasetLeg = this.segmentsCities[this.currentPreasetLegId].fromCity + ' - ' + this.segmentsCities[this.currentPreasetLegId].toCity;
    }

    @action
    previousPreseatLeg()
    {
        this.currentPreasetLegId--;
        if (this.currentPreasetLegId <0)
        {
            this.currentPreasetLegId = 0;
        }

        console.log(this.currentPreasetLegId);
        this.currentPreasetLeg = this.segmentsCities[this.currentPreasetLegId].fromCity + ' - ' + this.segmentsCities[this.currentPreasetLegId].toCity;
    }



    @action
    selectSeat(args)
    {
        console.log(args.route);
        console.log(args.paxId);
        console.log(args.seat);

        this.passengers[args.paxId].preseat.push({
            seat: args.seat,
            leg: this.currentPreasetLeg
        })

    }




}


export default OtaStore;