import React, {Component} from 'react';


class FareBox extends Component {
    render() {
        return (<div className="col-md-6">

            <div className="panel panel-default">
                <div className="panel-body">
                    <p>Description</p>
                    <input type="radio" value={this.props.id} checked={true}/>
                </div>
            </div>
        </div>);
    }
}


export default FareBox;