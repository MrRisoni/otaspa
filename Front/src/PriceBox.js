import React, {Component} from 'react';

import OtaStore from "./OtaStore";


class PriceBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            pricing : {}
        };

    }

    componentDidMount() {

        var self = this;
        console.log('pricebox renders');
        OtaStore.on('change', () => {
            console.log('pricebox changes');
            self.setState({pricing : OtaStore.getPricing()});
        });
    }

    render() {

        return (
            <div className="pricebox">
                <div className="row">
                    <div className="col-md-12">

                        <div className="panel panel-default">
                            <div className="panel-heading">Price Analysis</div>
                            <div className="panel-body">


                                <h4>Upsales</h4>
                                {this.state.pricing.upsales.map ( (upsl) => {
                                    return (<div>{upsl.title}</div>)
                                })}



                                <h2>Total Price : {this.state.pricing.total}</h2>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }

}


export default PriceBox;