import React, {Component} from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};


        this.getTodos = this.getTodos.bind(this);
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
