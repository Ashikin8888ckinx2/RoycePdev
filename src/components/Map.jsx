
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import keys from "../components/keys"




const AnyReactComponent = (text) => <div>{text}</div>;

const Map = () => {
    const [center, setCenter] = useState({lat: 32.797370, lng: -117.250600 });
    const [zoom, setZoom] = useState(17);
    return (
        <div style={{ height: '20rem', width: '20rem' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${keys.GOOGLE_KEY}` }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={32.797370}
            lng={-117.250600}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
}

export default Map;