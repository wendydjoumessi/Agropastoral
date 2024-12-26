import React from 'react';
import { LayersControl, Polyline, Polygon } from 'react-leaflet';
import { livestockInfrastructures, transhumanceTrails, grazingAreas } from '../../data/mockInfrastructureData';
import { CustomMarker } from './CustomMarker';

const { Overlay } = LayersControl;

export function MapLayers() {
  return (
    <LayersControl position="topright">
      <Overlay checked name="Infrastructures d'élevage">
        <div>
          {livestockInfrastructures.map((infra) => (
            <CustomMarker
              key={infra.id}
              position={[infra.coordinates.lat, infra.coordinates.lng]}
              type={infra.type}
              data={infra}
            />
          ))}
        </div>
      </Overlay>

      <Overlay checked name="Pistes de transhumance">
        <div>
          {transhumanceTrails.map((trail) => (
            <Polyline
              key={trail.id}
              positions={trail.coordinates}
              color={trail.status === 'active' ? '#2563eb' : '#ef4444'}
              weight={3}
            >
            </Polyline>
          ))}
        </div>
      </Overlay>

      <Overlay checked name="Zones de pâturage">
        <div>
          {grazingAreas.map((area) => (
            <Polygon
              key={area.id}
              positions={area.boundaries}
              pathOptions={{
                color: area.grassHealth === 'good' ? '#22c55e' : 
                       area.grassHealth === 'average' ? '#eab308' : '#ef4444',
                fillOpacity: 0.3
              }}
            >
            </Polygon>
          ))}
        </div>
      </Overlay>
    </LayersControl>
  );
}