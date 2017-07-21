import React, {Component} from 'react';

import Upsale from './Upsale';

class UpsaleList extends Component {
    constructor(props) {
        super(props);

        this.clickedUpsale = this.clickedUpsale.bind(this);
    }


    clickedUpsale(data) {

        this.props.buyUpsale(data);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-10">

                    <div className="panel panel-primary">
                        <div className="panel-heading">Select upsales</div>
                        <div className="panel-body">

                            {this.props.upsales.map(upsl => {
                                return ( <Upsale key={upsl.id}
                                                 obj={upsl}
                                                 clickedUpsale={this.clickedUpsale}/>)
                            })}


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default UpsaleList;