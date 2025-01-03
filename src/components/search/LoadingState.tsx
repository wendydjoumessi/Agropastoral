import React from 'react';

export const LoadingState: React.FC = () => (
  <div className="flex justify-center items-center p-8">
    <div className="relative">
      <div className="w-8 h-8 border-2 border-gray-200 rounded-full" />
      <div className="absolute top-0 left-0 w-8 h-8 border-2 border-gray-800 rounded-full border-t-transparent animate-spin" />
    </div>
  </div>
);