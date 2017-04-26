import React, {Component} from 'react';

class BaggageLeg extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">Dep</div>
                    <div className="panel-body">

                        <div className="row">

                            <div className="col-md-2">
                                <button type="button" className="btn btn-default" aria-label="Left Align">
                                    <span className="glyphicon glyphicon-plus"></span>
                                </button>
                            </div>


                            <div className="col-md-10">
                                <select className="form-control" id={this.props.selectID} onChange={this.localHandler}>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">

                                <button type="button" className="btn btn-default" aria-label="Left Align">
                                    <span className="glyphicon glyphicon-minus"></span>
                                </button>


                                Free
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default BaggageLeg;