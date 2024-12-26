import { LivestockInfrastructure, TranshumanceTrail, GrazingArea } from '../types/infrastructure';

export const livestockInfrastructures: LivestockInfrastructure[] = [
  {
    id: 'vm-001',
    type: 'veterinary_post',
    name: 'Poste Vétérinaire Dschang',
    coordinates: { lat: 5.4428, lng: 10.0535 },
    status: 'operational',
    contact: {
      name: 'Dr. Kamga',
      phone: '+237600000000'
    }
  },
  {
    id: 'cm-001',
    type: 'cattle_market',
    name: 'Marché à Bétail Foréké',
    coordinates: { lat: 5.4628, lng: 10.0735 },
    status: 'operational',
    capacity: 500
  },
  {
    id: 'wp-001',
    type: 'water_point',
    name: 'Point d\'eau Santchou',
    coordinates: { lat: 5.4728, lng: 10.0835 },
    status: 'operational'
  }
];

export const transhumanceTrails: TranshumanceTrail[] = [
  {
    id: 'tr-001',
    name: 'Couloir Dschang-Santchou',
    type: 'primary',
    coordinates: [
      [5.4428, 10.0535],
      [5.4528, 10.0635],
      [5.4628, 10.0735]
    ],
    status: 'active',
    season: 'dry',
    lastUpdate: new Date('2024-03-15')
  }
];

export const grazingAreas: GrazingArea[] = [
  {
    id: 'ga-001',
    name: 'Zone de Pâturage Foréké',
    type: 'permanent',
    boundaries: [
      [5.4428, 10.0535],
      [5.4528, 10.0635],
      [5.4628, 10.0735],
      [5.4428, 10.0535]
    ],
    capacity: 1000,
    currentOccupation: 750,
    grassHealth: 'good',
    waterAvailability: true
  }
];