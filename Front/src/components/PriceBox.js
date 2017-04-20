import React, {Component} from 'react';


class PriceBox extends Component {

    render() {
        return (
            <div className="pricebox">
                <div className="row">
                    <div className="col-md-12">
                         Total Price : {this.props.data.total}
                    </div>
                </div>
            </div>
        )
    }

}


export  default PriceBox;