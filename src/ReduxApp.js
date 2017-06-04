import React, {Component} from 'react';
import {connect} from 'redux';


import {getUpsales} from './redux_actions';


class ReduxApp extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
           <div>
               Redux App
               {this.props.upsales[0].title}

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        upsales : state.upsales
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        setUpsales : (upsales) => {
            dispatch(getUpsales());
        }
    }
};

export default  connect(mapStateToProps ,mapDispatchToProps)(ReduxApp);

