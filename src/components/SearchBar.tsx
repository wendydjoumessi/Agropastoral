import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Locality } from '../../types/Location';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  selectedLocality: Locality | null;
}

export const Map: React.FC<MapProps> = ({ selectedLocality }) => {
  const waterPointIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const localityIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const defaultCenter: [number, number] = [5.5, 10.5]; // Approximate center of West Region, Cameroon

  return (
    <MapContainer
      center={selectedLocality?.coordinates || defaultCenter}
      zoom={selectedLocality ? 12 : 8}
      className="w-full h-[600px]"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {selectedLocality && (
        <>
          <Marker
            position={selectedLocality.coordinates}
            icon={localityIcon}
          >
            <Popup>
              <h3 className="font-bold">{selectedLocality.name}</h3>
              <p>Water Points: {selectedLocality.waterPoints.length}</p>
              {selectedLocality.hasGreenPastures && <p>Has Green Pastures</p>}
              {selectedLocality.hasRoads && <p>Has Road Access</p>}
            </Popup>
          </Marker>

          {selectedLocality.waterPoints.map((point) => (
            <Marker
              key={point.id}
              position={point.coordinates}
              icon={waterPointIcon}
            >
              <Popup>
                <h3 className="font-bold">{point.name}</h3>
                <p>Type: {point.type}</p>
              </Popup>
            </Marker>
          ))}

          <Circle
            center={selectedLocality.coordinates}
            radius={2000}
            pathOptions={{ color: 'green', fillColor: 'green', fillOpacity: 0.2 }}
          />
        </>
      )}
    </MapContainer>
  );
};