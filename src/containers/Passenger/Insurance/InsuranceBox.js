import React, {Component} from 'react';


class InsuranceBox extends Component {
    render() {
        return (<div className="col-md-3">

            <div className="panel panel-default">
                <div className="panel-body">
                    <p>Description</p>
                    <input type="radio" value="option1" checked={true}/>
                </div>
            </div>
        </div>);
    }
}


export default InsuranceBox;