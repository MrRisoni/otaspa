import React, {Component} from 'react';

import OtaStore from '../../../OtaStore';
import * as OtaActions from '../../../actions';


class BaggageLeg extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            bags:[],
            bought :[ {
                title: 'test1'
            },
                {
                    title: 'test2'
                }]
        };

        this.localHandler = this.localHandler.bind(this);
    }

    componentWillMount()
    {
        let  self = this;
        OtaActions.getBaggages();

        console.log(OtaStore.getBags());



        this.setState({ bags: OtaStore.getBags()});
        console.log('BaggageLeg Mount ');
        console.log(self.state.bags);
    }
    localHandler()
    {

    }
    render() {


        var optionsHTML =[];
        // pass either the id or the title as value
        for (var i=0; i < this.state.bags.length; i++) {
            var val =  this.state.bags[i].id;
            optionsHTML.push(<option key={val} value={val}>{this.state.bags[i].title}</option>);
        }


        return (
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">{this.props.legTitle}</div>
                    <div className="panel-body">



                        <div className="row">

                            <div className="col-md-10">
                                <select className="form-control"  onChange={this.localHandler}>
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