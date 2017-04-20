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

                                Total Price : {this.props.data.total}

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }

}


export  default PriceBox;