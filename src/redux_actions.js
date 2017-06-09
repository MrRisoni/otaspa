export function getUpsales() {
    return {
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
    }
}


export function getBaggages() {
    return {
        type: "GET_BAGGAGES",
        payload: [
            {
                title: "23x45x34 23KG",
                price: 22
            },
            {
                title: "23x45x34 15KG",
                price: 12
            }
        ]
    }
}

export function getPassengerCount() {
    return {
        type: "GET_PAPCOUNT",
        payload: ['ADT', 'ADT', 'CNN']
    }
}


export function getPassengers() {
    return {
        type: "GET_PAPCOUNT",
        payload: [{
            type: "ADT",
            name: '',
            surname: '',
            bod: '',
            insurance: 0,
            fare: '',
            bag: 0
        },
            {
                type: "ADT",
                name: '',
                surname: '',
                bod: '',
                insurance: 0,
                fare: '',
                bag: 0
            },
            {
                type: "CNN",
                name: '',
                surname: '',
                bod: '',
                insurance: 0,
                fare: '',
                bag: 0
            }]
    }
}


export function getItinerary() {
    return {
        type: "GET_ITINERARY",
        payload: {
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
        }
    }
}