import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import FontAwesome from 'react-fontawesome';


@inject('otastore')
@observer

class BagRemoval extends Component {
    constructor(props) {
        super(props);

        this.remove = this.remove.bind(this);
    }

    remove(e) {
        console.log('---remove ------');
        console.log(this.props.bagData.id);
        console.log('carrier ' + this.props.bagData.carrier);
        console.log('passengerid ' + this.props.passengerid);
        console.log('legid ' + this.props.leg);


        this.props.otastore.removeBag( { passengerid: this.props.passengerid,
            carrier: this.props.carrier,
            leg: this.props.leg,
            bag_type_id: this.props.bagData.id});


    }
    render() {

        return (


            <div className="row">
                <div className="col-md-12">
                    <button type="button" className="btn mybtn btn-danger" onClick={this.remove}>


                        <FontAwesome
                            className='fa fa-minus'
                            name='minus'
                            size='2x'
                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                        />

                    </button>


                        {this.props.bagData.count} x {this.props.bagData.carrier}
                        {this.props.bagData.title}
                </div>
            </div>
        );
    }
}

export default BagRemoval;


