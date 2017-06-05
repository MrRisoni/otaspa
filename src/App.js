import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

import * as OtaActions from "./actions";
import OtaStore from "./OtaStore";


import PriceBox from './containers/PriceBox';
import Itinerary from './containers/Trip/Itinerary';
import UpsaleList from './containers/UpsaleList';
import PassengerList from './containers/PassengerList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itinerary: {},
            upsales: [],
            bags:[],
            loadingUpsales : 0
        };

    }

    componentWillMount()
    {
        let self = this;

        console.log('Will mount');

        OtaActions.getItinerary();

        this.setState({
            itinerary: OtaStore.getItinerary(),
        });

        OtaActions.getUpsales();

        this.setState({ upsales: OtaStore.getUpsales()});


        OtaActions.getBaggages();

        this.setState({bags: OtaStore.getBags()});
        console.log(self.state);


    }


    componentDidMount() {
    }


    render() {
        return (
            <div className="row">

                <div className="col-md-10">

                   <Itinerary itinerary={this.state.itinerary}/>


                    <PassengerList />

                    {/*  while loading display spinner  */}
                    { (this.state.loadingUpsales === 0) ?
                        <FontAwesome
                            className='fa-spinner'
                            name='spinner'
                            size='4x'
                            spin
                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                        />
                        : '' }

                    <UpsaleList AppHandler={this.handleUpsales} upsales={this.state.upsales}/>


                </div>


                <div className="col-md-2 ">
                   <PriceBox/>
                </div>

            </div>
        );
    }
}

export default App;
