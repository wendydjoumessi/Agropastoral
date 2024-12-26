import React from 'react';
import { MapContainer as LeafletMapContainer, TileLayer } from 'react-leaflet';
import { MapLayers } from './MapLayers';
import { MENOUA_CENTER, ZOOM_LEVEL } from '../../config/mapConfig';

export function MapContainer() {
  return (
    <div className="h-[600px] relative">
      <LeafletMapContainer
        center={MENOUA_CENTER}
        zoom={ZOOM_LEVEL}
        className="h-full w-full rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapLayers />
      </LeafletMapContainer>
    </div>
  );
}