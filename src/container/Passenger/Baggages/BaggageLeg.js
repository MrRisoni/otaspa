import React, {Component} from 'react';

class BaggageLeg extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            bought :[ {
                title: 'test1'
            },
                {
                    title: 'test2'
                }]
        }
    }
    render() {


        var optionsHTML =[];
        // pass either the id or the title as value
        for (var i=0; i < this.props.data.length; i++) {
            var val =  this.props.data[i].id;
            optionsHTML.push(<option key={this.props.data[i].id} value={val}>{this.props.data[i].title}</option>);
        }

        let  baggageDiv = (<span className="label label-danger">Baggage Not Included</span>);
        if (this.props.freeBuggage) {
            baggageDiv = (<span className="label label-primary">You have free buggage</span>);
        }

        return (
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">{this.props.legTitle}</div>
                    <div className="panel-body">


                        <div className="row">
                            <div className="col-md-10 col-md-offset-2">
                                {baggageDiv}
                            </div>

                        </div>


                        <div className="row">

                            <div className="col-md-2">
                                <button type="button" className="btn btn-default" aria-label="Left Align">
                                    <span className="glyphicon glyphicon-plus"></span>
                                </button>
                            </div>


                            <div className="col-md-10">
                                <select className="form-control" id={this.props.selectID} onChange={this.localHandler}>
                                    {optionsHTML}
                                </select>
                            </div>
                        </div>

                        <br/>

                        <div className="row">
                            <div className="col-md-10">

                                {/* prints the list of bought baggages */}
                                <ul>
                                    {this.state.bought.map(function (bg) {
                                        return(<li>
                                            <button type="button" className="btn btn-default btn-sm" aria-label="Left Align">
                                                <span className="glyphicon glyphicon-minus"></span>
                                            </button>
                                            {bg.title}
                                        </li>)
                                    })}
                                </ul>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default BaggageLeg;