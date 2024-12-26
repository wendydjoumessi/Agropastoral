import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { LivestockInfrastructure } from '../../types/infrastructure';

interface CustomMarkerProps {
  position: [number, number];
  type: string;
  data: LivestockInfrastructure;
}

const markerIcons = {
  veterinary_post: new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  }),
  cattle_market: new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  }),
  water_point: new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  })
};

export function CustomMarker({ position, type, data }: CustomMarkerProps) {
  return (
    <Marker position={position} icon={markerIcons[type as keyof typeof markerIcons]}>
      <Popup>
        <div className="p-2">
          <h3 className="font-semibold">{data.name}</h3>
          <p className="text-sm">Status: {data.status}</p>
          {data.capacity && <p className="text-sm">Capacité: {data.capacity}</p>}
          {data.contact && (
            <div className="mt-2 text-sm">
              <p>Contact: {data.contact.name}</p>
              <p>Tél: {data.contact.phone}</p>
            </div>
          )}
        </div>
      </Popup>
    </Marker>
  );
}