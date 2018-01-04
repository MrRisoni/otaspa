import React, {Component} from 'react';
import {inject} from 'mobx-react';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import Itinerary from '../Booking/Itinerary/Itinerary';
import CardTable from './CardTable';


@inject('MasterStore')
class FinalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processFinished: false
        }

        this.renderPriceData = this.renderPriceData.bind(this);
        this.renderTicketData = this.renderTicketData.bind(this);
        this.randomTicket = this.randomTicket.bind(this);

    }

    componentWillMount() {
        const self = this;
        console.log('mounting...');
        let settings = require('../env_settings');

        let api = settings.BACK_END_URL;
        console.log(api);

        axios.post(api + '/api/pay')
            .then(function (response) {
                self.setState({processFinished: true});

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    randomTicket()
    {
        var text = "";
        var possible = "0123456789";

        for (var i = 0; i < 13; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    renderTicketData()
    {
        let ticketRows = [];

        this.props.MasterStore.otaStore.passengers.forEach((px) => {
           if (px.active) {

               ticketRows.push({
                   title:  px.surname + ' ' + px.name,
                   value: this.randomTicket()
               })
           }
        });

        return {
            title: 'Tickets',
            headers: ['Passenger', 'Ticket'],
            rows: ticketRows
        };
    }

    renderPriceData()
    {
        let priceRows = [];

        let total = 0;
        this.props.MasterStore.otaStore.paxTypes.forEach( (pax) => {
            if (pax.count >0) {
                priceRows.push({
                    title:  pax.name + ' x ' + pax.count,
                    value: (pax.count * pax.convertedPrice).toFixed(2)
                });

                total += parseFloat(pax.count * pax.convertedPrice);
            }
        });

        let insuranceTotal =0;
        let insuranceCount = 0;
        this.props.MasterStore.otaStore.passengers.forEach((px) => {
            if (px.insuranceInfo > 1 && px.active) {

                this.props.MasterStore.otaStore.insuranceInfo.forEach((ins) => {

                    if (ins.id === px.insuranceInfo) {
                        insuranceTotal += parseFloat(ins.convertedPrice);
                        insuranceCount++;
                        total+= parseFloat(ins.convertedPrice);
                    }

                });
            }
        });

        if (insuranceCount >0) {
            priceRows.push({
                title:  'Insurance x ' +insuranceCount,
                value: (insuranceTotal).toFixed(2)
            })
        }

        // bags
        let bagsDepCount = 0;
        let bagsDepCost = 0;
        let bagsRetCount = 0;
        let bagsRetCost = 0;


        this.props.MasterStore.otaStore.passengers.forEach((px) => {

            if (px.totalBags > 0 && px.active) {

                px.bags.forEach((bagLeg, idxLeg) => {

                    bagLeg.types.forEach((bag) => {

                        if (bag.count > 0) {
                            if (idxLeg === 0) {

                                bagsDepCount += bag.count;
                                bagsDepCost += parseFloat(bag.price * bag.count)
                            }
                            else {

                                bagsRetCount += bag.count;
                                bagsRetCost += parseFloat(bag.price * bag.count)
                            }
                        }

                    });// end bag iteration for each leg

                }); // end leg iteration
            }
        });

        total += parseFloat(bagsDepCost) + parseFloat(bagsRetCost);

        if (bagsDepCount >0) {
            priceRows.push({
                title:  'Bags Dep x ' +bagsDepCount,
                value: bagsDepCost.toFixed(2)
            })
        }

        if (bagsRetCount >0) {
            priceRows.push({
                title:  'Bags Ret x ' +bagsRetCount,
                value: bagsRetCost.toFixed(2)
            })
        }
        priceRows.push({
            title:  'Total',
            value: total.toFixed(2)
        });


        return {
            title:'PriceAnalysis',
            headers: ['Description', 'Value'],
            rows: priceRows
        }


    }
    render() {

        if (this.state.processFinished) {


            const priceData = this.renderPriceData();
            const ticketData = this.renderTicketData();

            return (
                <div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <Itinerary/>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <CardTable data={ticketData}/>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <CardTable data={priceData}/>
                        </div>
                    </div>




                </div>)
        }
        else {
            return (<FontAwesome
                className='super-crazy-colors'
                name='spinner'
                size='4x'
                spin
                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
            />)
        }
    }
}

export default FinalPage;


