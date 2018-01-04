import {observable, action} from 'mobx';
import moment from 'moment';


class ItineraryStore {


    @observable departRoute = 'RHO-LHR';
    @observable returnRoute = 'LGW-RHO';


    @observable
    countries = [];

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


}


export default ItineraryStore;