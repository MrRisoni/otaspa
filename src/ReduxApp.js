import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';


import Itinerary from './containers/Trip/Itinerary';
import UpsaleList from './containers/UpsaleList';
import PassengerList from './containers/PassengerList';
import PriceBox from './containers/PriceBox';


class ReduxApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            upsales: {
                baggages: []
            },
            bagInfo: [
                {
                    title: "23x45x34 23KG",
                    price: 22
                },
                {
                    title: "23x45x34 15KG",
                    price: 12
                }
            ],
            types: ['ADT', 'ADT', 'CNN']



        };

        this.updateAppState = this.updateAppState.bind(this);

    }

    updateAppState(data)
    {
        console.log(data);
    }

    render() {
        return (
            <div>
                <div className="row">

                    <div className="col-md-10">


                        <Itinerary/>


                        <PassengerList
                            bagInfo={this.state.bagInfo}
                            updateAppState={this.updateAppState}
                            types={this.state.types}
                        />


                        {/*  while loading display spinner  */}
                        <FontAwesome
                            className='fa-spinner'
                            name='spinner'
                            size='4x'
                            spin
                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                        />


                        <UpsaleList/>


                    </div>


                    <div className="col-md-2 ">
                        <PriceBox upsales={this.state.upsales}/>
                    </div>

                </div>

            </div>
        );
    }
}


export default  ReduxApp

