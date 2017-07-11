import React, {Component} from 'react';


class InsuranceBox extends Component {
    render() {
        return (<div className="col-md-3">

            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <p> {this.props.data.title} </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            {this.props.data.price}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <input type="radio" value="option1" checked={true}/>
                        </div>
                    </div>


                </div>
            </div>
        </div>);
    }
}


export default InsuranceBox;