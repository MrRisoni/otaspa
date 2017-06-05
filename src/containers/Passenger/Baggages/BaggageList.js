import React, {Component} from 'react';
import {connect} from 'react-redux';


import BaggageLeg from './BaggageLeg';



class BaggageList extends Component {
    render() {
        return (<div className="row">
            <div className="col-md-12">


                    <div className="panel panel-default">
                        <div className="panel-heading">Select Baggages</div>
                        <div className="panel-body">

                            <div className="row">

                                <BaggageLeg legTitle={'ATH-MUC'} bags={this.props.bags}/>
                                <BaggageLeg legTitle={'MUC-ATH'} bags={this.props.bags}/>



                            </div>


                        </div>
                    </div>

            </div>
        </div>);
    }
}


function mapStateToProps(state) {
    return {
        bags : state.spa.baggages
    }
}

export default connect(mapStateToProps)(BaggageList);

