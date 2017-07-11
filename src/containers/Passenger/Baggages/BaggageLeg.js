import React, {Component} from 'react';



class BaggageLeg extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            value : ''
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event)
    {

        console.log(event.target.value);
        this.setState({value: event.target.value});
        console.log(this.props.papid);

       this.props.updateAppBags({ papid: this.props.papid, leg: this.props.legTitle , bagid:  event.target.value});

    }

    render() {


        var optionsHTML =[];

        optionsHTML.push(<option key="10" value="10">No bag</option>);

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
                                <select className="form-control" value={this.state.value} onChange={this.handleChange}>
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