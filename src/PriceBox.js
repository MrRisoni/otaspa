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

        let total = 0;


        this.props.otastore.paxTypes.map((px) => {
            total += px.count * px.convertedPrice;
        });

        // bags

        this.props.otastore.passengers.map((px) => {
            px.bags.map((bagLeg, idx) => {
                bagLeg.types.map((bag) => {
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


                        <h3>Bags</h3>
                        <hr/>

                        {this.props.otastore.passengers.map((px) => {
                            return ( <div className="passengerBagPriceBox">
                                <div className="row">
                                <div className="col-md-12">
                                    #Passenger {px.humanID}
                                    <div key={px.id}> {px.bags.map((bagLeg, idx) => {
                                        return ( <div key={idx}> {bagLeg.types.map((bag) => {
                                            return (<div key={bag.key} className="row">

                                                <div className="col-md-12">
                                                    {bag.count}
                                                    x {bag.title} {bag.price} {this.props.otastore.currency} </div>


                                            </div>)
                                        })} </div>)
                                    })} </div>
                                </div>
                                </div>
                                <hr/>
                            </div>)
                        })}


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