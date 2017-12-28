import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 38.3712, lng: 24.1268 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 37.9756, lng: 23.73379 }} />}
    </GoogleMap>
));



export default MyMapComponent;
