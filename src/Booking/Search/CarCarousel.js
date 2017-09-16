import React, {Component} from 'react';


class CarCarousel extends Component {

    render() {
        return (


            <div className="CarCarousel">

                <div className="row">
                    <div className="col-md-12">


                        <div className="card bg-light">
                            <div className="card-header">

                                <div className="row">

                                    <div className="col-md-5">
                                        Pick your car
                                    </div>

                                    <div className="col-md-5"></div>

                                    <div className="col-md-2">
                                        <button className="btn btn-sm btn-dark btn-block"> label</button>
                                    </div>


                                </div>

                            </div>

                            <div className="card-body">


                                <div className="row">


                                    <div className="col-md-2">


                                        <button className="btn btn_next_prev btn-primary btn-success">

                                        </button>

                                    </div>

                                    <div className="col-md-8">

                                        <div className="row">


                                            <div className="col-md-4">

                                            </div>


                                            <div className="col-md-3">
                                                getCarName

                                            </div>


                                        </div>


                                    </div>
                                    <div className="col-md-2">

                                        <button className="btn btn_next_prev btn-primary btn-success">
                                        </button>


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
            </div>


        );
    }
}

export default CarCarousel;


