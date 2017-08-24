import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import FontAwesome from 'react-fontawesome';


@inject('otastore')
@observer

class BagCarrier extends Component {
    constructor(props)
    {
        super(props);


        this.buy = this.buy.bind(this);
    }

    buy(e)
    {
        console.log('------------');
        console.log(e.target.id);
        console.log(this.props.airline.carrier);
        console.log(this.props.passengerid);
        console.log(this.props.leg);

        this.props.otastore.buyBag({
            passengerid : this.props.passengerid,
            carrier : this.props.airline.carrier,
            leg: this.props.leg,
            bag_type_id : e.target.id
        });
    }
    render() {
        return (

        <div className="card card-primary bagCarrier">
            <div className="card-header">{this.props.airline.title} Max num {this.props.airline.maxBags}</div>

            <div className="card-body">


                {this.props.airline.bags.map( (bag) => {

                    return (<div className="row">



                        <div className="col-md-12">
                        <button type="button" className="btn mybtn btn-primary" id={bag.id} onClick={this.buy}>

                            <FontAwesome
                                className='fa fa-plus'
                                name='plus'
                                size='2x'
                                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                            />

                        </button>

                        {bag.title} {bag.convertedPrice} {this.props.otastore.currency} </div></div>)

                })}


            </div>
        </div>

        );
    }
}

export default BagCarrier;


