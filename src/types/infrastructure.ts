export interface LivestockInfrastructure {
  id: string;
  type: 'cattle_market' | 'veterinary_post' | 'water_point' | 'rest_area' | 'vaccination_park';
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  status: 'operational' | 'limited' | 'closed';
  capacity?: number;
  lastInspection?: Date;
  contact?: {
    name: string;
    phone: string;
  };
}

export interface TranshumanceTrail {
  id: string;
  name: string;
  type: 'primary' | 'secondary' | 'tertiary';
  coordinates: Array<[number, number]>; // Array of [lat, lng] points forming the trail
  status: 'active' | 'limited' | 'closed';
  season: 'dry' | 'wet' | 'both';
  lastUpdate: Date;
  restrictions?: string[];
}

export interface GrazingArea {
  id: string;
  name: string;
  type: 'permanent' | 'seasonal';
  boundaries: Array<[number, number]>; // Polygon coordinates
  capacity: number; // Livestock units
  currentOccupation: number;
  grassHealth: 'good' | 'average' | 'poor';
  waterAvailability: boolean;
  season?: {
    start: Date;
    end: Date;
  };
}