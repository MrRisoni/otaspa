import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import SeatShow from '../UpsalesPage/Preseat/SeatShow';

@inject('otaStore')
@inject('htmlStore')
@observer
class SideBar extends Component {
    constructor(props) {
        super(props);


        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        console.log(ev.target.value);
        this.props.otaStore.changeCurrency(ev.target.value);
    }

    getBagsDiv()
    {
        let bagsDiv = [];

        this.props.otaStore.passengers.forEach((px) => {
            let papDiv = [];

            let legsDiv = [];
            let departLeg = [];
            let returnLeg = [];
            let key = '';

            if (px.totalBags > 0 && px.active) {

                // for each trip leg


                px.bags.forEach((bagLeg, idxLeg) => {

                    bagLeg.types.forEach((bag) => {

                        key = px.id + '_leg' + idxLeg + '_bag' + bag.key;
                        if (bag.count > 0) {
                            if (idxLeg === 0) {


                                departLeg.push(<div key={key} className="row">
                                    <div className="col-md-12">
                                        {bag.count}
                                        x {bag.title} {bag.price} {this.props.otaStore.currency}
                                    </div>
                                </div>)

                            }
                            else {
                                returnLeg.push(<div key={key} className="row">
                                    <div className="col-md-12">
                                        {bag.count}
                                        x {bag.title} {bag.price} {this.props.otaStore.currency}
                                    </div>
                                </div>)
                            }
                        }

                    });// end bag iteration for each leg

                }); // end leg iteration

                if (departLeg.length > 0) {
                    legsDiv.push(<div key="depLeg" className="row">
                        <div className="col-md-12">
                            Departure
                        </div>
                    </div>);
                    legsDiv.push(departLeg);
                }
                if (returnLeg.length > 0) {
                    legsDiv.push(<div key="retLeg" className="row">
                        <div className="col-md-12">
                            Return
                        </div>
                    </div>);
                    legsDiv.push(returnLeg);
                }


                papDiv.push(<div key={px.id} className="passengerBagPriceBox">
                    <div className="row">
                        <div className="col-md-12">
                            #Passenger {px.humanID}
                            {legsDiv}
                            <hr/>
                        </div>
                    </div>
                </div>);

                bagsDiv.push(papDiv);
            }

        });


        if (bagsDiv.length > 0) {
            bagsDiv.unshift(<h4 key="bags">Bags</h4>);
            bagsDiv.push(< hr key="bagsHR"/>);
        }

        return bagsDiv;
    }

    getInsuranceDiv()
    {
        let insuranceDiv = [];

        this.props.otaStore.passengers.forEach((px) => {
            if (px.insuranceInfo > 1 && px.active) {

                this.props.otaStore.insuranceInfo.forEach((ins) => {

                    if (ins.id === px.insuranceInfo) {
                        const key = ins.key + 'papid' + px.id;
                        insuranceDiv.push(<div key={key} className="row">
                            <div className="col-md-12">
                                #Passenger {px.humanID} {ins.title} {ins.convertedPrice}
                            </div>
                        </div>);
                    }

                });

            }
        });

        if (insuranceDiv.length > 0) {
            insuranceDiv.unshift(<h4 key="insurance">Insurance</h4>);
            insuranceDiv.push(< hr key="insuranceHR"/>);
        }

    }


    render() {

        //
        let bagsDiv = this.getBagsDiv();
        let insuranceDiv = this.getInsuranceDiv();

        // *********** Total Price ****************

        let total = 0;


        this.props.otaStore.paxTypes.forEach((px) => {
            total += px.count * px.convertedPrice;
        });

        // bags

        this.props.otaStore.passengers.forEach((px) => {

            if (px.insuranceInfo > 0) {
                this.props.otaStore.insuranceInfo.forEach((ins) => {
                    if (ins.id === px.insuranceInfo) {
                        total += parseFloat(ins.convertedPrice);
                    }
                });
            }

            px.bags.forEach((bagLeg, idx) => {
                bagLeg.types.forEach((bag) => {
                    total += ( parseFloat(bag.price) * bag.count);
                });
            });


        });

        //console.log('total ' + total);
        total = total.toFixed(2);

        let priceBoxStyle = {marginTop :  this.props.htmlStore.priceBoxMargin + 'px'};
      //  console.log('new pricebox style ' + priceBoxStyle);
        return (
            <div className="pricebox" style={priceBoxStyle}>

                <SeatShow/>

                <div className="card bg-info">
                    <div className="card-header"><b>Price Analysis </b></div>
                    <div className="card-body text-white">

                        <div className="row">

                            <div className="col-md-12">
                                <h4>Ticket Price</h4>
                                <hr/>
                            </div>
                        </div>


                        {this.props.otaStore.paxTypes.map((px) => {
                            return (<div key={px.type} className="row">
                                {px.count > 0 &&
                                <div className="col-md-12"> {px.count}
                                    x {px.name} {px.convertedPrice} {this.props.otaStore.currency} </div>
                                }

                            </div>)
                        })}

                        <hr/>

                        <div className="row">
                            <div className="col-md-12">
                                <h4>Upsales</h4>
                                <hr/>
                            </div>
                        </div>


                        {insuranceDiv}

                        {bagsDiv}

                        <div className="row">
                            <div className="col-md-12">

                                <h4> Total Price : {total} {this.props.otaStore.currency} </h4>

                            </div>
                        </div>

                    </div>

                    <div className="card-footer bg-light">

                        <select className="form-control" onChange={this.handleChange}>
                            {this.props.otaStore.currencyData.map((cur) => {
                                return (<option key={cur.trigram} value={cur.trigram}>{cur.trigram}</option>)
                            })}

                        </select>

                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar;