import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const OpenStreetMap = ({ latitude, longitude }) => {
  return (
    <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{ height: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
      <Marker position={[latitude, longitude]}>
        <Popup>You are here!</Popup>
      </Marker>
    </MapContainer>
  )
}

export default OpenStreetMap
