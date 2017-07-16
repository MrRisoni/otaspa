import moment from 'moment';

function extractInfoFromLegs(legs) {

    const lastLeg = legs.length - 1;

    return {
        depIATA_Airport: legs[0].fromAirport.substr(0, 3),
        depAirport: legs[0].fromAirport.substr(4),

        airIATA_Airport: legs[lastLeg].toAirport.substr(0, 3),
        arrAirport: legs[lastLeg].toAirport.substr(4),

        depTime: moment(legs[0].depDateTime).format('HH:MM'),
        arrTime: moment(legs[lastLeg].arrDateTime).format('HH:MM'),

        depDate: moment(legs[0].depDateTime).format('dd DD/MM/YYYY'),
        arrDate: moment(legs[lastLeg].arrDateTime).format('dd DD/MM/YYYY'),

        depGMT: legs[lastLeg].depDateTime.substr(-6),
        retGMT: legs[lastLeg].arrDateTime.substr(-6)
    }
}


export default {extractInfoFromLegs}