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
                id: 1,
                type: 'ADT'
            },
            {
                id: 2,
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


    @action addPassenger()
    {
        const new_id = this.passengers.length + 1;

        this.passengers.push({ id : new_id, type: 'ADT'});

        this.paxTypes[0].count++;
    }

}


const ostastore = new OtaStore();
export default ostastore;