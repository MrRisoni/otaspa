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


                                <h4>** Net price **</h4>

                                {this.props.netPrice}


                                <h4>** Upsales **</h4>

                                <hr/>
                                {this.props.passengers.map((pap) => {
                                    return (<div>
                                        {pap.surname} {pap.name}
                                        <br/>{pap.fareTitle} - {pap.farePrice}

                                        <br/> {pap.insuranceTitle} - {pap.insurancePrice}


                                        <br/>{this.props.legs[0]}: {pap.bag.dep} {pap.bagPrices.dep}
                                        <br/>{this.props.legs[1]}: {pap.bag.ret} {pap.bagPrices.ret}


                                        <hr/>
                                    </div>)
                                })}


                                {this.props.extras.map((xtr) => {
                                    if (xtr.selected) {
                                        return (<div>{xtr.title} - {xtr.price}</div>)
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


export default PriceBox;
