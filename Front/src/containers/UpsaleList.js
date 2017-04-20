import React, {Component} from 'react';

import Upsale from '../components/Upsale';

class UpsaleList extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.upsales);

        this.handleUpsales = this.handleUpsales.bind(this);
    }

    handleUpsales(id, checked) {
        console.log('handleUpsales' + id + ' status ' + checked);
        this.props.AppHandler(id, checked); // update state of App Component

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-10">

                    <div className="panel panel-default">
                        <div className="panel-heading">Select upsales</div>
                        <div className="panel-body">

                            {this.props.upsales.map(upsl => {
                                return ( <Upsale key={upsl.id} obj={upsl} parentHandler={this.handleUpsales}/>)
                            })}


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export  default UpsaleList;

