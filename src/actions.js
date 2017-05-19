import dispatcher from "./dispatcher";


export function checkedUpsale(id, selection) {
    dispatcher.dispatch({
        type: "CHECKED_UPSALE",
        payload : {
            id: id,
            selected : selection
        }
    })
}

export function getUpsales() {
    dispatcher.dispatch({
        type: "GET_UPSALES",
        payload : [
            {
                id : 1,
                title: 'SMS',
                price : 1.5,
                selected : false
            },
            {
                id : 2,
                title: 'Web check-in',
                price : 3,
                selected : false
            },
            {
                id : 3,
                title: 'Pet in cabin',
                price : 5.65,
                selected : false
            }

        ]
    })
}



export function getItinerary() {
    dispatcher.dispatch({
        type: "GET_ITINERARY",
        info : {fromCity : 'Athens',
                toCity: 'London',
                carrier: 'Turkish Airlines',
                depDate : 'Fr 23 Jun 2017',
                depTime : '10:10',
                depAirport: 'ATH',
                arrTime: '16:00',
                arrAirport: 'LGW',
                duration: '07:50',
                stops: 1,
                suitcase: true,
                kilos: '25KG',
                roundTrip: false},
        aller: [
                    {
                        fromCity : 'Athens',
                        toCity : 'Istanbul',
                        fromAirport: 'ATH, Eleftherios Venizelos Intl Arpt',
                        toAirport: 'IST, Ataturk Arpt Terminal: I',
                        duration: '01:50',
                        depDateTime: '10:10 Freitag, 23 Jun 2017',
                        arrDateTime: '11:35 Freitag, 23 Jun 2017',
                        airline :  'Turkish Airlines TK',
                        codeShare: '',
                        flightNumber: 'TK1846',
                        cos: 'V',
                        waitTime: '02:20',
                        differentDay: false,
                        differentAirport: false
                    },
                    {
                        fromCity : 'Istanbul',
                        toCity : 'London',
                        fromAirport: 'IST, Ataturk Arpt Terminal: II',
                        toAirport: 'LGW, Gatwick Arpt  Terminal: S',
                        duration: '04:10',
                        depDateTime: '13:55 Freitag, 23 Jun 2017',
                        arrDateTime: '16:00 Freitag, 23 Jun 2017',
                        airline :  'Turkish Airlines TK',
                        codeShare: '',
                        flightNumber: 'TK1997',
                        cos: 'V',
                        waitTime: '',
                        differentDay: false,
                        differentAirport: false
                    }
                ] ,
        retour : []
    });
}