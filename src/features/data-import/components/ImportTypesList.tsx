import React from 'react';

export function ImportTypesList() {
  return (
    <div className="mt-4 space-y-2">
      <div className="flex items-center text-sm text-gray-600">
        <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
        <span>Excel: données des infrastructures</span>
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
        <span>Images: données satellites</span>
      </div>
    </div>
  );
}