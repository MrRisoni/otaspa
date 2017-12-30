import React, {Component} from 'react';

import FontAwesome from 'react-fontawesome';
import {inject, observer} from "mobx-react/index";

@inject('htmlStore')
@observer
class CarCarousel extends Component {

    render() {

        if (this.props.htmlStore.showCarCarousel) {
            return (

                <div className="CarCarousel">

                    <div className="row">
                        <div className="col-md-8 offset-md-2">


                            <div className="card bg-light">
                                <div className="card-header">

                                    <div className="row">

                                        <div className="col-md-5">
                                            Pick your car
                                        </div>

                                        <div className="col-md-2 offset-md-5">
                                            <button className="btn btn-sm btn-dark btn-block btnToggle"
                                                    data-toggle="collapse"
                                                    data-target={`#carSelectorCollapse`} aria-expanded="false"
                                                    aria-controls="carSelectorCollapse">
                                                Toggle
                                            </button>
                                        </div>

                                    </div>

                                </div>

                                <div className="card-body show" id="carSelectorCollapse">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <button className="btn btn_next_prev btn-primary btn-success">
                                                <FontAwesome
                                                    className='super-crazy-colors'
                                                    name='step-backward'
                                                    size='lg'
                                                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                                />
                                            </button>
                                        </div>

                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-3 offset-md-4">
                                                    getCarName
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-2">
                                            <button className="btn btn_next_prev btn-primary btn-success">
                                                <FontAwesome
                                                    className='super-crazy-colors'
                                                    name='step-forward'
                                                    size='lg'
                                                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                                />
                                            </button>
                                        </div>

                                    </div>

                                </div>


                                <div className="card-footer">

                                    <div className="row">
                                        <div className="col-md-12">
                                            getPrice
                                            getCurrency
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(<div></div>)
        }

    }
}

export default CarCarousel;


