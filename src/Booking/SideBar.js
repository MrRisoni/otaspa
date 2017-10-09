import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import SeatShow from '../Preseat/SeatShow';

@inject('otastore')
@observer
class SideBar extends Component {
    constructor(props) {
        super(props);


        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        console.log(ev.target.value);
        this.props.otastore.changeCurrency(ev.target.value);
    }

    render() {

        //
        let bagsDiv = [];

        this.props.otastore.passengers.forEach((px) => {
            let papDiv = [];

            let legsDiv = [];
            let departLeg = [];
            let returnLeg = [];
            let key = '';

            if (px.totalBags > 0) {

                // for each trip leg


                px.bags.forEach((bagLeg, idxLeg) => {

                    bagLeg.types.forEach((bag) => {

                        key = px.id + '_leg' + idxLeg + '_bag' + bag.key;
                        if (bag.count > 0) {
                            if (idxLeg === 0) {


                                departLeg.push(<div key={key} className="row">
                                    <div className="col-md-12">
                                        {bag.count}
                                        x {bag.title} {bag.price} {this.props.otastore.currency}
                                    </div>
                                </div>)

                            }
                            else {
                                returnLeg.push(<div key={key} className="row">
                                    <div className="col-md-12">
                                        {bag.count}
                                        x {bag.title} {bag.price} {this.props.otastore.currency}
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
            bagsDiv.unshift(<h3 key="bags">Bags</h3>);
            bagsDiv.push(< hr key="bagsHR"/>);
        }

        // *********** Insurance Div ****************
        let insuranceDiv = [];

        this.props.otastore.passengers.forEach((px) => {
            if (px.insuranceInfo > 1) {

                this.props.otastore.insuranceInfo.forEach((ins) => {

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
            insuranceDiv.unshift(<h3 key="insurance">Insurance</h3>);
            insuranceDiv.push(< hr key="insuranceHR"/>);
        }


        let brandedFareDiv = [];
        this.props.otastore.passengers.forEach((pax) => {

            pax.brandedFare.forEach( (pax_carrier) => {

                this.props.otastore.BrandedFares.forEach( (brand) => {
                   if (brand.carrier == pax_carrier.carrier) {

                       brandedFareDiv.push(
                           <div className="row">
                               <div className="col-md-12">
                                   #Passenger {pax.humanID} {brand.title}  {brand.options[pax_carrier.selection].name}
                               </div>
                           </div>);
                   }
                });
            });
        });


            // *********** Total Price ****************

        let total = 0;


        this.props.otastore.paxTypes.forEach((px) => {
            total += px.count * px.convertedPrice;
        });

        // bags

        this.props.otastore.passengers.forEach((px) => {

            if (px.insuranceInfo > 0) {
                this.props.otastore.insuranceInfo.forEach((ins) => {
                    if (ins.id === px.insuranceInfo) {
                        total += ins.convertedPrice;
                    }
                });
            }

            px.bags.forEach((bagLeg, idx) => {
                bagLeg.types.forEach((bag) => {
                    total += ( parseFloat(bag.price) * bag.count);
                });
            });


            px.brandedFare.forEach( (fare) => {
                total += parseFloat(fare.price);
            });
        });




        total = total.toFixed(2);

        return (
            <div className="pricebox">

                <SeatShow/>

                <div className="card bg-info">
                    <div className="card-header"><b>Price Analysis </b></div>
                    <div className="card-body text-white">

                        <div className="row">

                            <div className="col-md-12">
                                <h3>Ticket Price</h3>
                                <hr/>
                            </div>
                        </div>


                        {this.props.otastore.paxTypes.map((px) => {
                            return (<div key={px.type} className="row">
                                {px.count > 0 &&
                                <div className="col-md-12"> {px.count}
                                    x {px.name} {px.convertedPrice} {this.props.otastore.currency} </div>
                                }

                            </div>)
                        })}

                        <hr/>

                        <div className="row">
                            <div className="col-md-12">
                                <h3>Upsales</h3>
                                <hr/>
                            </div>
                        </div>


                        {insuranceDiv}

                        {bagsDiv}

                        {brandedFareDiv}


                        <div className="row">
                            <div className="col-md-12">

                                <h3> Total Price : {total} {this.props.otastore.currency} </h3>

                            </div>
                        </div>

                    </div>

                    <div className="card-footer bg-light">

                        <select className="form-control" onChange={this.handleChange}>
                            {this.props.otastore.currencyData.map((cur) => {
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