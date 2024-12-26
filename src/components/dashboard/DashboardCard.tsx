import React from 'react';
import { cn } from '../../utils/cn';

interface DashboardCardProps {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
  status: 'critical' | 'warning' | 'good';
}

const statusColors = {
  critical: 'bg-red-50 border-red-200',
  warning: 'bg-yellow-50 border-yellow-200',
  good: 'bg-green-50 border-green-200',
} as const;

export function DashboardCard({ title, value, trend, icon, status }: DashboardCardProps) {
  return (
    <div className={cn('border rounded-lg p-6', statusColors[status])}>
      <div className="flex justify-between items-start">
        {icon}
        <span className="text-sm font-medium">{trend}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold">{value}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
}