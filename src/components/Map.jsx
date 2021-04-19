// import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import { todo } from '../netlify/functions/todo'

const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY

const Map = () => {
  const center = { lat: 32.79737, lng: -117.2506 }
  const zoom = 17
  return (
    <div style={{ height: '30rem', width: '30rem' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: todo }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={32.79737} lng={-117.2506} text='My Marker' />
      </GoogleMapReact>
    </div>
  )
}

export default Map
