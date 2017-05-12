import React, {Component} from 'react';


import * as OtaActions from "./actions";
import OtaStore from "./OtaStore";


import Itinerary from './container/Itinerary';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentWillMount()
    {
        console.log('Will mount');
    }


    componentDidMount() {
        let self = this;
    }


    render() {
        return (
            <div className="row">

                <div className="col-md-12">

                   <Itinerary/>



                </div>


                <div className="col-md-2 ">
                   PriceBox
                </div>

            </div>
        );
    }
}

export default App;
