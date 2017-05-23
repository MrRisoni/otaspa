import dispatcher from "./dispatcher";


export function checkedUpsale(id, selection) {
    dispatcher.dispatch({
        type: "CHECKED_UPSALE",
        payload: {
            id: id,
            selected: selection
        }
    })
}

export function getUpsales() {
    dispatcher.dispatch({
        type: "GET_UPSALES",
        payload: [
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
    })
}


export function getItinerary() {
    dispatcher.dispatch({
        type: "GET_ITINERARY",
        info: {
            fromCity: 'Rhodes',
            toCity: 'London',
            depDate: 'Fr 23 Jun 2017',
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
        ],
        retour: [{
            fromCity: 'Rhodes',
            toCity: 'Athens',
            fromAirport: 'Rhodes Colossus Airport',
            toAirport: 'ATH, Eleftherios Venizelos Intl Arpt',
            duration: '00:50',
            depDateTime: '10:10 Freitag, 23 Jun 2017',
            arrDateTime: '11:05 Freitag, 23 Jun 2017',
            airline: 'Olympic Airways',
            code: 'A3',
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
                code: 'FR',
                waitTime: ''
            }]
    });
}