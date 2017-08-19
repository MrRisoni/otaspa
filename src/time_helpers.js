import moment from 'moment';

function extractInfoFromLegs(legs) {

    const lastLeg = legs.length - 1;

    return {
        depIATA_Airport: legs[0].fromAirport.substr(0, 3),
        depAirport: legs[0].fromAirport.substr(4),

        airIATA_Airport: legs[lastLeg].toAirport.substr(0, 3),
        arrAirport: legs[lastLeg].toAirport.substr(4),

        depTime: legs[0].depDateTime.substr(11, 5),
        arrTime: legs[lastLeg].arrDateTime.substr(11, 5),


        depDate: moment(legs[0].depDateTime).format('dd DD/MM/YYYY'),
        arrDate: moment(legs[lastLeg].arrDateTime).format('dd DD/MM/YYYY'),

        depGMT: legs[0].depDateTime.substr(-6),
        retGMT: legs[lastLeg].arrDateTime.substr(-6)
    }
}


function extractInfoFromSingleLeg(leg) {


    return {
        depIATA_Airport: leg.fromAirport.substr(0, 3),
        depAirport: leg.fromAirport.substr(4),

        airIATA_Airport: leg.toAirport.substr(0, 3),
        arrAirport: leg.toAirport.substr(4),

        depTime: leg.depDateTime.substr(11, 5),
        arrTime: leg.arrDateTime.substr(11, 5),

        depDate: moment(leg.depDateTime).format('dd DD/MM/YYYY'),
        arrDate: moment(leg.arrDateTime).format('dd DD/MM/YYYY'),

        depGMT: leg.depDateTime.substr(-6),
        retGMT: leg.arrDateTime.substr(-6)
    }
}




export default {
    extractInfoFromLegs,
    extractInfoFromSingleLeg
}