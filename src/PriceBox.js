import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


@inject('otastore')
@observer
class PriceBox extends Component {

    render() {

        return (
            <div className="pricebox">

                <div className="card bg-info">
                    <div className="card-header"><b>Price Analysis </b></div>
                    <div className="card-body text-white">

                        <div className="row">

                            <div className="col-md-12">
                                <h4 className="analysisCategory">Ticket Price</h4>
                                <hr/>
                            </div>
                        </div>


                        {this.props.otastore.paxTypes.map((px) => {
                            return (<div className="row">
                                <div className="col-md-12">
                                    {px.count} x {px.name} {px.convertedPrice} {this.props.currency}
                                </div>
                            </div>)
                        })}

                        <br/>
                            <div className="row">
                                <div className="col-md-12">

                                    <h3> Total Price : {this.props.totalPrice} {this.props.otastore.currency} </h3>

                                </div>
                            </div>

                    </div>

                    <div className="card-footer bg-light">

                        <select className="form-control">
                            {this.props.otastore.currencyData.map( (cur) => {
                                return (<option key={cur.trigram} value="asc">{cur.trigram}</option>)
                            })}

                        </select>

                    </div>
                </div>
            </div>


        )
    }
}

export default PriceBox;