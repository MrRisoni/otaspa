import React, {Component} from 'react';


import * as OtaActions from "./actions";
import OtaStore from "./OtaStore";


import Itinerary from './container/Itinerary';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itinerary: []
        };

    }

    componentWillMount()
    {
        let self = this;

        console.log('Will mount');

        OtaActions.getItinerary();
        console.log(OtaStore.getItinerary());

        this.setState({
            itinerary: OtaStore.getItinerary(),
        });

        console.log(self.state);
    }


    componentDidMount() {
    }


    render() {
        return (
            <div className="row">

                <div className="col-md-12">

                   <Itinerary itinerary={this.state.itinerary}/>



                </div>


                <div className="col-md-2 ">
                   PriceBox
                </div>

            </div>
        );
    }
}

export default App;
