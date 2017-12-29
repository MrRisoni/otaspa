import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker , MarkerWithLabel} from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: 38.3712, lng: 24.1268 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 37.9756, lng: 23.73379 }} />}

        <MarkerWithLabel
            position={{ lat: -34.397, lng: 150.644 }}
            labelAnchor={new google.maps.Point(0, 0)}
            labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
        >
            <div>Hello There!</div>
        </MarkerWithLabel>

    </GoogleMap>
));



export default MyMapComponent;
