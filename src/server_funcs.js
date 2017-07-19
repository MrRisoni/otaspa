// Dummy server that processes fake data
const moment = require('moment');


export default class FakeServer {
    constructor(product) {
        console.log('fake server class ' + product);
        this.product = product;
    }

    getDuration(leg) {
        let arriveTime = moment(leg.arrDateTime);
        let depTime = moment(leg.depDateTime);
        leg.durationMinutes = arriveTime.diff(depTime) / (1000 * 60);
        leg.duration = {
            hours: Math.floor(leg.durationMinutes / 60),
            minutes: leg.durationMinutes % 60
        };

        leg.waitTimeMinutes = 0;
        leg.wait = {hours: 0, minutes: 0};
    }


    getWaitTime(previousLeg, nextLeg) {
        let previousTime = moment(previousLeg.arrDateTime);
        let nextTime = moment(nextLeg.depDateTime);

        previousLeg.waitTimeMinutes = nextTime.diff(previousTime) / (1000 * 60);

        previousLeg.wait = {
            hours: Math.floor(previousLeg.waitTimeMinutes / 60),
            minutes: previousLeg.waitTimeMinutes % 60
        };

    }


    AirSearch() {

        var self = this;

        // read from json and add extra fields duration wait time stops
        let results = require('./data/air_segments.json');


        results.forEach((rsl) => {
            rsl.finalPrice = 0;
            rsl.stops = rsl.departLegs.length + rsl.returnLegs.length - 2;
            let total_duration = 0;
            rsl.total_waitMinutes = 0;

            rsl.depart_stops = rsl.departLegs.length - 1;
            rsl.return_stops = rsl.returnLegs.length - 1;

            rsl.depart_leg_duration_minutes = 0;
            rsl.return_leg_duration_minutes = 0;

            rsl.depart_leg_wait_minutes = 0;
            rsl.return_leg_wait_minutes = 0;


            rsl.departLegs.forEach((leg) => {
                self.getDuration(leg);
                total_duration += leg.durationMinutes;

                rsl.depart_leg_duration_minutes += leg.duration.hours * 60 + leg.duration.minutes;
            });


            rsl.returnLegs.forEach((leg) => {
                self.getDuration(leg);
                total_duration += leg.durationMinutes;

                rsl.return_leg_duration_minutes += leg.duration.hours * 60 + leg.duration.minutes;
            });


            for (var i = 0; i < rsl.departLegs.length - 1; i++) {
                self.getWaitTime(rsl.departLegs[i], rsl.departLegs[i + 1]);

                rsl.depart_leg_wait_minutes += rsl.departLegs[i].waitTimeMinutes;
            }

            for (var i = 0; i < rsl.returnLegs.length - 1; i++) {
                self.getWaitTime(rsl.returnLegs[i], rsl.returnLegs[i + 1]);

                rsl.return_leg_wait_minutes += rsl.returnLegs[i].waitTimeMinutes;
            }


            // add extra fee
            rsl.totalPrice = rsl.price + 0.18 * rsl.price;

            rsl.durationMinutes = total_duration;

            rsl.duration = {
                hours: Math.floor(rsl.durationMinutes / 60),
                minutes: rsl.durationMinutes % 60
            };


            rsl.total_waitMinutes = rsl.depart_leg_wait_minutes + rsl.return_leg_wait_minutes


            rsl.depart_leg_duration = {
                hours: Math.floor(rsl.depart_leg_duration_minutes / 60),
                minutes: rsl.depart_leg_duration_minutes % 60
            };


            rsl.return_leg_duration = {
                hours: Math.floor(rsl.return_leg_duration_minutes / 60),
                minutes: rsl.return_leg_duration_minutes % 60
            };


            rsl.depart_leg_wait = {
                hours: Math.floor(rsl.depart_leg_wait_minutes / 60),
                minutes: rsl.depart_leg_wait_minutes % 60
            };

            rsl.return_leg_wait = {
                hours: Math.floor(rsl.return_leg_wait_minutes / 60),
                minutes: rsl.return_leg_wait_minutes % 60
            };


            rsl.waitTime = {
                hours: Math.floor(rsl.total_waitMinutes / 60),
                minutes: rsl.total_waitMinutes % 60
            };


        });

        console.log(results);
        return results;

    }


    ShipSearch()
    {
        var self = this;

        let results = require('./data/ship_segments.json');

        results.forEach((rsl) => {
            rsl.finalPrice = 0;
            rsl.stops = rsl.departLegs.length + rsl.returnLegs.length - 2;
            let total_duration = 0;
            rsl.total_waitMinutes = 0;

            rsl.depart_stops = rsl.departLegs.length - 1;
            rsl.return_stops = rsl.returnLegs.length - 1;

            rsl.depart_leg_duration_minutes = 0;
            rsl.return_leg_duration_minutes = 0;

            rsl.depart_leg_wait_minutes = 0;
            rsl.return_leg_wait_minutes = 0;


            rsl.departLegs.forEach((leg) => {
                self.getDuration(leg);
                total_duration += leg.durationMinutes;

                rsl.depart_leg_duration_minutes += leg.duration.hours * 60 + leg.duration.minutes;
            });


            rsl.returnLegs.forEach((leg) => {
                self.getDuration(leg);
                total_duration += leg.durationMinutes;

                rsl.return_leg_duration_minutes += leg.duration.hours * 60 + leg.duration.minutes;
            });


            for (var i = 0; i < rsl.departLegs.length - 1; i++) {
                self.getWaitTime(rsl.departLegs[i], rsl.departLegs[i + 1]);

                rsl.depart_leg_wait_minutes += rsl.departLegs[i].waitTimeMinutes;
            }

            for (var i = 0; i < rsl.returnLegs.length - 1; i++) {
                self.getWaitTime(rsl.returnLegs[i], rsl.returnLegs[i + 1]);

                rsl.return_leg_wait_minutes += rsl.returnLegs[i].waitTimeMinutes;
            }


            // add extra fee
            rsl.totalPrice = rsl.price + 0.18 * rsl.price;

            rsl.durationMinutes = total_duration;

            rsl.duration = {
                hours: Math.floor(rsl.durationMinutes / 60),
                minutes: rsl.durationMinutes % 60
            };


            rsl.total_waitMinutes = rsl.depart_leg_wait_minutes + rsl.return_leg_wait_minutes


            rsl.depart_leg_duration = {
                hours: Math.floor(rsl.depart_leg_duration_minutes / 60),
                minutes: rsl.depart_leg_duration_minutes % 60
            };


            rsl.return_leg_duration = {
                hours: Math.floor(rsl.return_leg_duration_minutes / 60),
                minutes: rsl.return_leg_duration_minutes % 60
            };


            rsl.depart_leg_wait = {
                hours: Math.floor(rsl.depart_leg_wait_minutes / 60),
                minutes: rsl.depart_leg_wait_minutes % 60
            };

            rsl.return_leg_wait = {
                hours: Math.floor(rsl.return_leg_wait_minutes / 60),
                minutes: rsl.return_leg_wait_minutes % 60
            };


            rsl.waitTime = {
                hours: Math.floor(rsl.total_waitMinutes / 60),
                minutes: rsl.total_waitMinutes % 60
            };


        });
        return results;
    }

    HotelSearch()
    {
        let results = require('./data/hotels_segments.json');

        results.forEach((rsl) => {
            rsl.totalPrice = rsl.price + 0.12 * rsl.price;
        });
        return results;
    }


    getResults() {
        console.log('Fake server get results');
        console.log(this.product);
        if (this.product === 'air') {
            return this.AirSearch();
        }
        else if (this.product === 'hotel') {
            return this.HotelSearch();
        }
        else if (this.product === 'ship') {
            return this.ShipSearch();
        }
    }
}

