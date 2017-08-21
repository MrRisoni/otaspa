import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import FontAwesome from 'react-fontawesome';


@inject('otastore')
class BagCarrier extends Component {

    render() {
        return (

        <div className="card card-primary bagCarrier">
            <div className="card-header">{this.props.airline.carrier}</div>

            <div className="card-body">


                {this.props.airline.bags.map( (bag) => {

                    return (<div className="row">



                        <div className="col-md-12">
                        <button type="button" className="btn mybtn btn-primary">

                            <FontAwesome
                                className='fa fa-plus'
                                name='plus'
                                size='2x'
                                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                            />

                        </button>

                        {bag.title} {bag.convertedPrice} </div></div>)

                })}


            </div>
        </div>

        );
    }
}

export default BagCarrier;


