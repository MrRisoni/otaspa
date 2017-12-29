import React, {Component} from 'react';
import MapCluster from './MapCluster';
import axios from 'axios';

// https://tomchentw.github.io/react-google-maps/#markerclusterer

class MyMapComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state ={ markers: [] };
    }

    componentDidMount() {
        const self = this;
        let settings = require('../../env_settings');
        console.log(settings);
        let api = settings.BACK_END_URL;
        axios.get(api + '/api/markers')
            .then(function (response) {
                console.log(response.data);
                self.setState({ markers: response.data});
            });
    }

    render()
    {
        return (<MapCluster markers={this.state.markers} />)
    }
}

export default MyMapComponent;