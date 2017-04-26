import React, {Component} from 'react';


class Carousel extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-10">

                    <div className="panel panel-default">
                        <div className="panel-heading">{this.props.title}</div>
                        <div className="panel-body">

                            <div className="row">

                                <div className="col-md-2">
                                    <button type="button" className="btn btn-default" aria-label="Left Align">
                                        <span className="glyphicon glyphicon-menu-left"></span>
                                    </button>
                                </div>


                                <div className="col-md-8">
                                    <img size="15%" src={this.props.url}/>
                                </div>

                                <div className="col-md-2">
                                    <button type="button" className="btn btn-default" aria-label="Left Align">
                                        <span className="glyphicon glyphicon-menu-right"></span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Carousel;

