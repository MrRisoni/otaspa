import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


import FontAwesome from 'react-fontawesome';

@inject('otaStore')
@observer
class SelectBag extends Component {
    constructor(props) {
        super(props);

        this.buy = this.buy.bind(this);
    }

    buy(e) {
        console.log('------------');
        console.log(this.props.bagData.id);
        console.log('carrier ' + this.props.carrier);
        console.log('passengerid ' + this.props.passengerid);
        console.log('legid ' + this.props.leg);

        this.props.otaStore.buyBag({
            passengerid: this.props.passengerid,
            carrier: this.props.carrier,
            leg: this.props.leg,
            bag_type_id: this.props.bagData.id
        });
    }
    render() {
        return (
            <div  className="row">
                <div className="col-md-12">
                    <button type="button" className="btn mybtn btn-primary"  onClick={this.buy}>

                        <FontAwesome
                            className='fa fa-plus'
                            name='plus'
                            size='2x'
                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                        />

                    </button>
                    {this.props.bagData.title} {this.props.bagData.convertedPrice} {this.props.otaStore.currency} </div>
            </div>);


    }
}

export default SelectBag;


