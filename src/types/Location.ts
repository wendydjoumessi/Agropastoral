export interface WaterPoint {
    id: string;
    name: string;
    type: 'well' | 'spring' | 'reservoir';
    coordinates: [number, number];
  }
  
  export interface Locality {
    id: string;
    name: string;
    coordinates: [number, number];
    waterPoints: WaterPoint[];
    hasGreenPastures: boolean;
    hasRoads: boolean;
  }