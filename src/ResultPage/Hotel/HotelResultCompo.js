import React, {Component}  from 'react';


class HotelResultCompo extends Component {
    constructor(props)
    {
        super(props);

        this.proceed = this.proceed.bind(this);
    }

    proceed()
    {
        this.props.router.push('/some/path');

    }
    render() {
        return (

            <div className="panel panel-primary">
                <div className="panel-heading">

                </div>
                <div className="panel-body">

                       <div className="row">

                           <div className="col-md-3">
                                Hotel placeholder Image
                           </div>

                           <div className="col-md-3">
                                Stars {this.props.data.stars}
                               address <br/>
                               other info  <br/>
                           </div>
                           </div>
                </div>

                <div className="panel-footer">
                    <div className="row">
                        <div className="col-md-5">
                            <b> Price {this.props.data.price} </b>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-3">
                            <button className="btn  btn-primary" onClick={this.proceed}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default HotelResultCompo;