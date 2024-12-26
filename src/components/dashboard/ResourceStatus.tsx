import React from 'react';
import { DropletIcon } from '../icons/icons';

export function ResourceStatus() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Resource Status</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <DropletIcon className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-sm">Water Point A-123</span>
          </div>
          <div className="w-24 bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}