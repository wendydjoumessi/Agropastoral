import React from 'react';
import { DashboardCard } from './DashboardCard';
import { DropletIcon, TreeIcon, SunIcon, AlertIcon } from '../icons/icons';

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <DashboardCard
        title="Water Resources"
        value="72%"
        trend="↓ 3%"
        icon={<DropletIcon className="h-8 w-8 text-blue-500" />}
        status="warning"
      />
      <DashboardCard
        title="Pasture Coverage"
        value="85%"
        trend="↑ 5%"
        icon={<TreeIcon className="h-8 w-8 text-green-500" />}
        status="good"
      />
      <DashboardCard
        title="Temperature"
        value="32°C"
        trend="↑ 2°C"
        icon={<SunIcon className="h-8 w-8 text-orange-500" />}
        status="warning"
      />
      <DashboardCard
        title="Active Alerts"
        value="3"
        trend="↑ 2"
        icon={<AlertIcon className="h-8 w-8 text-red-500" />}
        status="critical"
      />
    </div>
  );
}