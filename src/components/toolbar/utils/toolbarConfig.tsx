import React from 'react';
import {
  FileSpreadsheet,
  Satellite,
  CloudRain,
  Map,
  Bell,
  Settings,
  Database,
  LineChart,
  Upload,
  Download
} from 'lucide-react';

export const toolbarSections = [
  {
    label: 'Données',
    icon: <Database className="h-5 w-5" />,
    items: [
      {
        label: 'Importer Excel',
        icon: <FileSpreadsheet className="h-4 w-4" />,
        action: 'SHOW_IMPORT_DIALOG'
      },
      {
        label: 'Importer Images Satellites',
        icon: <Satellite className="h-4 w-4" />,
        action: 'SHOW_IMPORT_DIALOG'
      },
      {
        label: 'Exporter Données',
        icon: <Download className="h-4 w-4" />,
        action: 'EXPORT_DATA'
      }
    ]
  },
  {
    label: 'Météo',
    icon: <CloudRain className="h-5 w-5" />,
    items: [
      {
        label: 'Prévisions',
        action: 'SHOW_WEATHER_FORECAST'
      },
      {
        label: 'Historique',
        action: 'SHOW_WEATHER_HISTORY'
      }
    ]
  },
  {
    label: 'Carte',
    icon: <Map className="h-5 w-5" />,
    items: [
      {
        label: 'Vue Satellite',
        action: 'SHOW_SATELLITE_VIEW'
      },
      {
        label: 'Zones de Pâturage',
        action: 'SHOW_GRAZING_AREAS'
      }
    ]
  },
  {
    label: 'Analyses',
    icon: <LineChart className="h-5 w-5" />,
    items: [
      {
        label: 'Statistiques',
        action: 'SHOW_STATISTICS'
      },
      {
        label: 'Rapports',
        action: 'SHOW_REPORTS'
      }
    ]
  }
];

export const quickActions = [
  {
    label: 'Import Rapide',
    icon: <Upload className="h-5 w-5" />,
    action: 'SHOW_IMPORT_DIALOG'
  },
  {
    label: 'Notifications',
    icon: <Bell className="h-5 w-5" />,
    action: 'SHOW_NOTIFICATIONS',
    badge: '3'
  },
  {
    label: 'Paramètres',
    icon: <Settings className="h-5 w-5" />,
    action: 'SHOW_SETTINGS'
  }
];