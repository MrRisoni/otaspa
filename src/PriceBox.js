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

        total = total.toFixed(2);

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

                                {px.count > 0 &&
                                <div className="col-md-12"> {px.count}
                                    x {px.name} {px.convertedPrice} {this.props.currency} </div>
                                }

                            </div>)
                        })}

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