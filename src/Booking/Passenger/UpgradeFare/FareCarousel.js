import React, {Component} from 'react';


class FareCarousel extends Component {

    render() {
        return (

            <div className="row">
                <div className="col-md-12">
                    <div className="card  bg-info ">

                        <div className="card-header">
                            Airline

                            <select className="form-control">
                                <option value="Light">
                                    Ryanair
                                </option>
                                <option value="Light">
                                    British
                                </option>
                            </select>
                        </div>


                        <div className="card-body">

                            <div className="row">

                                <div className="col-md-2">  prev  </div>

                                <div className="col-md-8">


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


