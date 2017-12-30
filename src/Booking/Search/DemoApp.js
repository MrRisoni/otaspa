import axios from 'axios';
import MapWithAMarkerClusterer from './MapWithAMarkerClusterer';
import React, {PureComponent} from 'react';


class DemoApp extends React.PureComponent {
    constructor(props)
    {
        super(props);
        this.state ={ markers: [] };
    }

    componentWillMount() {
        this.setState({ markers: [] })
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

    render() {
        return (
            <MapWithAMarkerClusterer markers={this.state.markers} />
        )
    }
}

export default DemoApp;
