import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('otastore')
@observer
class PriceBox extends Component {
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

                        key = px.id+'_leg' + idxLeg + '_bag'+ bag.key;
                        if (idxLeg === 0) {

                            departLeg.push(<div key={key} className="row">
                                <div className="col-md-12">
                                    {bag.count}
                                    x {bag.title} {bag.price} {this.props.otastore.currency}
                                </div>
                            </div>)
                        }
                        else {
                            returnLeg.push(<div  key={key} className="row">
                                <div className="col-md-12">
                                    {bag.count}
                                    x {bag.title} {bag.price} {this.props.otastore.currency}
                                </div>
                            </div>)
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
                        </div>
                    </div>
                </div>);

                bagsDiv.push(papDiv);
            }

        });



        // *********** Insurance Div ****************
        let insuranceDiv =[];

        this.props.otastore.passengers.forEach((px) => {
            if (px.insuranceInfo >0) {

                this.props.otastore.insuranceInfo.forEach( (ins) => {

                    if (ins.id === px.insuranceInfo) {
                        insuranceDiv.push( <div key={ins.key} className="row">
                            <div className="col-md-12">
                                #Passenger {px.humanID} {ins.title} {ins.convertedPrice}
                            </div>
                        </div>);
                    }

                });

            }
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
        });

        total = total.toFixed(2);

        return (
            <div className="pricebox">

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
                        <hr/>


                        <h3>Insurance</h3>
                        {insuranceDiv}

                        <hr/>
                        <h3>Bags</h3>
                        {bagsDiv}

                        <hr/>


                        <br/>
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

export default PriceBox;