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


                        Show: {this.props.paxTypes[0].type}
                        {this.props.paxTypes.map((px) => {
                            return (<div className="row">
                                <div className="col-md-12">
                                    {px.count} x {px.name} {px.convertedPrice} {this.props.currency}
                                </div>
                            </div>)
                        })}

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
    };
}

export default connect(mapStateToProps, {})(PriceBox);