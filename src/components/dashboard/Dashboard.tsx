import React from 'react';
import { MetricsGrid } from './MetricsGrid';
import { AlertsList } from './AlertsList';
import { ResourceStatus } from './ResourceStatus';
import { MapView } from '../map/MapView';

export function Dashboard() {
  return (
    <div className="p-6">
      <MetricsGrid />
      <div className="grid grid-cols-1 gap-6 mb-6">
        <MapView />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertsList />
        <ResourceStatus />
      </div>
    </div>
  );
}