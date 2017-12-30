import React, {PureComponent} from 'react';
import  { compose, withProps } from 'recompose';
import  { withScriptjs,  withGoogleMap,  GoogleMap} from 'react-google-maps';
import  { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';

/*global google*/


const MapWithAMarkerClusterer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBF_FbrM4H8G46RTlg7Ngiurxqo9EsBacQ&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={4}
        defaultCenter={{ lat: 38.3712, lng: 24.1268 }}
    >
        <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            {props.markers.map(marker => (
                <MarkerWithLabel
                    key={marker.airport_id}
                    position={{ lat: marker.latitude, lng: marker.longitude }}
                    labelAnchor={new google.maps.Point(0, 0)}
                    labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
                >
                    <div>Hello There!</div>
                </MarkerWithLabel>

            ))}
        </MarkerClusterer>
    </GoogleMap>
);

export default MapWithAMarkerClusterer;