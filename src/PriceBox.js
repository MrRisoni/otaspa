import React, {Component} from 'react';
import {connect} from 'react-redux';

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


                        {this.props.paxTypes.map((px) => {
                            return (<div className="row">
                                <div className="col-md-12">
                                    {px.count} x {px.name} {px.convertedPrice} {this.props.currency}
                                </div>
                            </div>)
                        })}

                    </div>

                    <div className="card-footer bg-light">

                        <select className="form-control">
                            {this.props.currencies.map( (cur) => {
                                return (<option key={cur.trigram} value="asc">{cur.trigram}</option>)
                            })}

                        </select>

                    </div>
                </div>
            </div>


        )
    }
}


function mapStateToProps(state) {
    return {
        paxTypes: state.paxTypes,
        currency: state.selectedCurrency,
        currencies : state.currencyData
    };
}

export default connect(mapStateToProps, {})(PriceBox);