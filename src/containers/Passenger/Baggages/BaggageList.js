import React, {Component} from 'react';

import BaggageLeg from './BaggageLeg';


class BaggageList extends Component {
    constructor(props){
        super(props);


        this.getDataFromLeg = this.getDataFromLeg.bind(this);
    }

    getDataFromLeg(data)
    {
        console.log(data);
        this.props.callback(data);
    }


    render() {
        return (<div className="row">
            <div className="col-md-12">


                    <div className="panel panel-default">
                        <div className="panel-heading">Select Baggages</div>
                        <div className="panel-body">

                            <div className="row">

                                <BaggageLeg legTitle={'ATH-MUC'}
                                            bags={this.props.bagInfo}
                                            callback={this.getDataFromLeg}/>

                                <BaggageLeg legTitle={'MUC-ATH'}
                                            bags={this.props.bagInfo}
                                            callback={this.getDataFromLeg}/>



                            </div>


                        </div>
                    </div>

            </div>
        </div>);
    }
}




export default BaggageList;

