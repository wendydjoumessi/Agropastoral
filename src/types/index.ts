export interface ResourceData {
  id: string;
  type: 'water' | 'pasture';
  status: 'critical' | 'warning' | 'normal' | 'good';
  location: {
    lat: number;
    lng: number;
  };
  lastUpdated: Date;
}

export interface AlertData {
  id: string;
  type: 'resource' | 'climate' | 'conflict';
  severity: 'critical' | 'warning' | 'info';
  message: string;
  timestamp: Date;
  location?: {
    lat: number;
    lng: number;
  };
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  timestamp: Date;
}