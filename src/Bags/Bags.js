import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


import BagLeg from './BagLeg';

@inject('otastore')
class Bags extends Component {

    render() {
        return (

            <div className="row bagComponent">
                <div className="col-md-12">


                    <div className="alert alert-success" role="alert">
                        Purchase bags!
                    </div>



                    <div className="row">


                        <BagLeg route="departRoute"
                                passengerid={this.props.passengerid}
                                legCarriers={this.props.otastore.outboundCarriers}
                        />


                        <BagLeg route="returnRoute"
                                passengerid={this.props.passengerid}
                                legCarriers={this.props.otastore.inboundCarriers}
                        />

                    </div>



                </div>
            </div>





        );
    }
}

export default Bags;


