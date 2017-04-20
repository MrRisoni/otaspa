import React, {Component} from 'react';


import PriceBox from './components/PriceBox';
import UpsaleList from "./containers/UpsaleList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pricing: {
                total: 0
            },
            upsales: [
                {
                    id: 1,
                    title: 'SMS',
                    price: 1,
                    selected : false
                },{
                    id: 2,
                    title: 'Web Check-in',
                    price: 6,
                    selected : false
                },{
                    id: 3,
                    title: 'Hotel Room',
                    price: 10,
                    selected : false
                }
            ]

        };

        this.handleUpsales = this.handleUpsales.bind(this);
    }

    handleUpsales(upsale_id)
    {
        console.log(upsale_id)
    }

    render() {
        return (
            <div className="row">

                <div className="col-md-10">

                    {/* start panel */}
                    <div className="row">
                        <div className="col-md-8">

                            <div className="panel panel-default">
                                <div className="panel-body">Panel Content</div>
                                <div className="panel-footer">Panel Footer</div>
                            </div>
                        </div>
                    </div>
                    {/* end panel */}


                    <UpsaleList handler={this.handleUpsales} upsales={this.state.upsales}/>


                </div>


                <div className="col-md-2 ">
                    <PriceBox data={this.state.pricing}/>
                </div>

            </div>
        );
    }
}

export default App;
