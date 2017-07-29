import React, {Component}  from 'react';


class HotelResultCompo extends Component {
    constructor(props) {
        super(props);

        this.proceed = this.proceed.bind(this);
    }

    proceed() {
        this.props.router.push('/some/path');

    }

    render() {
        return (

            <div className="panel panel-primary">
                <div className="panel-heading">

                </div>
                <div className="panel-body">

                    <div className="row">

                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-5">


                                <img className="hotel_preview" src="https://s-ec.bstatic.com/images/hotel/270x200/481/48123358.jpg"></img>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="row">
                                <div className="col-md-6">
                                    <b> {this.props.data.name} </b>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    Stars: {this.props.data.stars}
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6">
                                    Address: {this.props.data.address}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="panel-footer">
                    <div className="row">
                        <div className="col-md-5">
                            <b> Price {this.props.data.totalPrice} </b>
                        </div>

                    </div>
                </div>
            </div>


        )
    }
}

export default HotelResultCompo;