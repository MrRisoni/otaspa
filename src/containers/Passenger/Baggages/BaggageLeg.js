import React, {Component} from 'react';



class BaggageLeg extends Component {


    render() {


        var optionsHTML =[];
        // pass either the id or the title as value
        for (var i=0; i < this.props.bags.length; i++) {
            var val =  this.props.bags[i].id;
            optionsHTML.push(<option key={val} value={val}>{this.props.bags[i].title}</option>);
        }


        return (
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">{this.props.legTitle}</div>
                    <div className="panel-body">



                        <div className="row">

                            <div className="col-md-10">
                                <select className="form-control">
                                    {optionsHTML}
                                </select>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        )
    }
}



export default BaggageLeg;