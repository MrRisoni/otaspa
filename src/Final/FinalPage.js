import React, {Component} from 'react';
import {inject} from 'mobx-react';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import Itinerary from '../Booking/Itinerary/Itinerary';
import CardTable from './CardTable';


@inject('otastore')
class FinalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processFinished: false
        }
    }

    componentWillMount() {
        const self = this;
        console.log('mounting...');
        let settings = require('../env_settings');

        let api = settings.BACK_END_URL;
        console.log(api);

        axios.post(api + '/api/pay')
            .then(function (response) {
                self.setState({processFinished: true});

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        if (this.state.processFinished) {

            let passengersDiv = {};

            let priceRows = [];

            this.props.otastore.paxTypes.forEach( (pax) => {
               if (pax.count >0) {
                   priceRows.push({
                       title:  pax.name + ' x ' + pax.count,
                       value: (pax.count * pax.convertedPrice).toFixed(2)
                   })
               }
            });

            let priceData = {
                title:'PriceAnalysis',
                headers: ['Description', 'Value'],
                rows: priceRows
            };



            return (
                <div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <Itinerary/>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <CardTable data={priceData}/>
                        </div>
                    </div>

                </div>)
        }
        else {
            return (<FontAwesome
                className='super-crazy-colors'
                name='spinner'
                size='4x'
                spin
                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
            />)
        }
    }
}

export default FinalPage;


