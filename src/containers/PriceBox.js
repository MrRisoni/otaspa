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

                                {this.props.upsales.baggages.map ( (bag) => {
                                    return (<div>{bag.passengerName} : {bag.leg} {bag.title} - {bag.price}</div>)
                                })}

                                {this.props.extras.map ( (xtr) => {
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
