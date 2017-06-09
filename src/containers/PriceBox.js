import React, {Component} from 'react';

import {connect} from 'react-redux';


class PriceBox extends Component {
    render() {

        return (
            <div className="pricebox">
                <div className="row">
                    <div className="col-md-12">

                        <div className="panel panel-default">
                            <div className="panel-heading">Price Analysis</div>
                            <div className="panel-body">


                                <h4>Upsales</h4>
                                {this.props.upsales.map ( (upsl) => {
                                    if (upsl.selected) {
                                        return (<div>{upsl.title} - {upsl.price}</div>)
                                    }
                                })}




                                <h2>Total Price : {this.props.total}</h2>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }

}



function mapStateToProps(state) {
    return {
        total : state.spa.priceBox.total,
        upsales : state.spa.priceBox.upsales
    }
}
export default connect(mapStateToProps)(PriceBox);
