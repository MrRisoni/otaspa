import axios from 'axios';
import MapWithAMarkerClusterer from './MapWithAMarkerClusterer';
import React, {PureComponent} from 'react';


class PriceMap extends React.PureComponent {
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
        axios.get(api + '/api/airports')
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

export default PriceMap;
