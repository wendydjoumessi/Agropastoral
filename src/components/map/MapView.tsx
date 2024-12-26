import React from 'react';
import { MapHeader } from './MapHeader';
import { MapContainer } from './MapContainer';
import { MapLegend } from './MapLegend';

export function MapView() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <MapHeader title="Carte de la Menoua" />
      <MapContainer />
      <MapLegend />
    </div>
  );
}