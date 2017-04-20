import React, {Component} from 'react';

import Upsale from '../components/Upsale';

class UpsaleList extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.upsales);

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">

                    <div className="panel panel-default">
                        <div className="panel-heading">Select upsales</div>
                        <div className="panel-body">

                            {this.props.upsales.map(upsl => {
                                return ( <Upsale key={upsl.id} obj={upsl} handler={this.props.handler}/>)
                            })}






                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export  default UpsaleList;

