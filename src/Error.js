import React, {Component} from 'react';

class Error extends Component {

    render() {
        if (this.props.show) {
            return (
                <div className={this.props.class}><p>{this.props.msg}</p></div>

            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default Error;


