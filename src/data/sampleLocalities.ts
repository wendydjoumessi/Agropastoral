import { Locality } from '../types/Location';

export const sampleLocalities: Locality[] = [
  {
    id: '1',
    name: 'Bafoussam',
    coordinates: [5.4774, 10.4214],
    waterPoints: [
      {
        id: 'w1',
        name: 'Central Well',
        type: 'well',
        coordinates: [5.4780, 10.4220]
      }
    ],
    hasGreenPastures: true,
    hasRoads: true
  },
  {
    id: '2',
    name: 'Dschang',
    coordinates: [5.4470, 10.0533],
    waterPoints: [
      {
        id: 'w2',
        name: 'Mountain Spring',
        type: 'spring',
        coordinates: [5.4475, 10.0540]
      }
    ],
    hasGreenPastures: true,
    hasRoads: true
  },
  {
    id: '3',
    name: 'Mbouda',
    coordinates: [5.6283, 10.2543],
    waterPoints: [
      {
        id: 'w3',
        name: 'Community Reservoir',
        type: 'reservoir',
        coordinates: [5.6290, 10.2550]
      }
    ],
    hasGreenPastures: false,
    hasRoads: true
  },
  {
    id: '4',
    name: 'Foumban',
    coordinates: [5.7265, 10.9027],
    waterPoints: [
      {
        id: 'w4',
        name: 'Palace Well',
        type: 'well',
        coordinates: [5.7270, 10.9030]
      }
    ],
    hasGreenPastures: true,
    hasRoads: true
  }
];