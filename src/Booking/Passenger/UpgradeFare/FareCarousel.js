import React, {Component} from 'react';


class FareCarousel extends Component {

    render() {
        return (

            <div className="row">
                <div className="col-md-12">
                    <div className="card">

                        <div className="card-header">
                            Select fare type
                        </div>


                        <div className="card-body">

                            <div className="row">

                                <div className="col-md-2">  prev  </div>

                                <div className="col-md-8">



                                    <div className="card">

                                        <div className="card-header">
                                            Flex Classic
                                        </div>

                                        <div className="card-body">

                                            <p>Description</p>

                                            </div>

                                    </div>


                                </div>

                                <div className="col-md-2">  next </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default FareCarousel;


