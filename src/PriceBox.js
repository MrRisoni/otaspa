import React, {Component} from 'react';
import {connect} from 'react-redux';

class PriceBox extends Component {

    render() {
        return (

            <div className="row">
                Show: {this.props.paxTypes[0].type}

            </div>)
    }
}


function mapStateToProps(state) {
    return {
        paxTypes: state.paxTypes
    };
}

export default connect(mapStateToProps, {})(PriceBox);