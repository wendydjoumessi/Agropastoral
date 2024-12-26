import React from 'react';
import { AlertIcon } from '../icons/icons';

export function AlertsList() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
      <div className="space-y-4">
        <div className="flex items-center p-3 bg-red-50 rounded-md">
          <AlertIcon className="h-5 w-5 text-red-500 mr-3" />
          <div>
            <p className="text-sm font-medium text-red-800">Critical water shortage</p>
            <p className="text-xs text-red-600">Northern Corridor - 2h ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}