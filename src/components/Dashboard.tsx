import React from 'react';
import { Droplets, Grass, ThermometerSun, AlertTriangle } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Water Resources"
          value="72%"
          trend="↓ 3%"
          icon={<Droplets className="h-8 w-8 text-blue-500" />}
          status="warning"
        />
        <DashboardCard
          title="Pasture Coverage"
          value="85%"
          trend="↑ 5%"
          icon={<Grass className="h-8 w-8 text-green-500" />}
          status="good"
        />
        <DashboardCard
          title="Temperature"
          value="32°C"
          trend="↑ 2°C"
          icon={<ThermometerSun className="h-8 w-8 text-orange-500" />}
          status="warning"
        />
        <DashboardCard
          title="Active Alerts"
          value="3"
          trend="↑ 2"
          icon={<AlertTriangle className="h-8 w-8 text-red-500" />}
          status="critical"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            {/* Placeholder for alerts list */}
            <div className="flex items-center p-3 bg-red-50 rounded-md">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-3" />
              <div>
                <p className="text-sm font-medium text-red-800">Critical water shortage</p>
                <p className="text-xs text-red-600">Northern Corridor - 2h ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Resource Status</h2>
          <div className="space-y-4">
            {/* Placeholder for resource status */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm">Water Point A-123</span>
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, value, trend, icon, status }: {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
  status: 'critical' | 'warning' | 'good';
}) {
  const statusColors = {
    critical: 'bg-red-50 border-red-200',
    warning: 'bg-yellow-50 border-yellow-200',
    good: 'bg-green-50 border-green-200',
  };

  return (
    <div className={`${statusColors[status]} border rounded-lg p-6`}>
      <div className="flex justify-between items-start">
        {icon}
        <span className="text-sm font-medium">{trend}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold">{value}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
}