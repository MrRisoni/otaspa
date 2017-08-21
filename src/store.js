import {observable, action, computed} from 'mobx';

class OtaStore {

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
                humanID : 1,
                active : true,
                type: 'ADT'
            },
            {
                id: 1,
                humanID : 2,
                active : 2,
                type: 'ADT'
            }];




    @action changeCurrency(cur) {
        this.currency = cur;

        this.currencyData.forEach( (cd) => {
            if (cd.trigram === cur) {
                this.currentRate = cd.rate;
            }
        });


        this.paxTypes.forEach( (px) => {
           px.convertedPrice = px.netPrice * this.currentRate;

           px.convertedPrice = px.convertedPrice.toFixed(2);
        });
    }


    @observable reasonPassengers = '';

    @action addPassenger()
    {
        this.reasonPassengers = '';
        if ( (this.passengers.length+1) >9) {
            this.reasonPassengers = 'You have exceeded the number of allowed passengers'
        }
        else {
            const new_id = this.passengers.length ;
            let new_human_id =0;


            // get the number of active passengers
            this.passengers.forEach( (ps) => {
                if (ps.active) {
                    new_human_id++;
                }
            });
            new_human_id++;

            this.passengers.push({ id : new_id, type: 'ADT', humanID: new_human_id});

            this.paxTypes[0].count++;

            this.passengersWithinLimits()
        }

    }

    passengersWithinLimits()
    {
        let adult_count = this.paxTypes[0].count;
        let child_count = this.paxTypes[1].count;
        let infant_count = this.paxTypes[2].count;

        if (adult_count < (child_count + infant_count)) {
            this.reasonPassengers  = 'More minors than adults';
        }
    }

    @action changePaxType(args)
    {
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

}


const ostastore = new OtaStore();
export default ostastore;