import React, {Component} from 'react';


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
                                <div className="row">
                                    <div className="col-md-12">
                                        {this.props.upsales.map(function (upsl) {

                                            if (upsl.selected) {
                                                return (
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            {upsl.title} : {upsl.price}
                                                        </div>
                                                    </div> )
                                            }

                                        })}
                                    </div>
                                </div>

                                <h2>Total Price : {this.props.data.total}</h2>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }

}


export  default PriceBox;