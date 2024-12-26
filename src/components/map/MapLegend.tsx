import React from 'react';

export function MapLegend() {
  return (
    <div className="mt-4 text-sm text-gray-600">
      <p className="font-medium mb-2">Légende:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
          <span>Postes vétérinaires</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
          <span>Marchés à bétail</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-violet-500 rounded-full mr-2"></div>
          <span>Points d'eau</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-0.5 bg-blue-500 mr-2"></div>
          <span>Pistes de transhumance</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 bg-opacity-30 border border-green-500 mr-2"></div>
          <span>Zones de pâturage</span>
        </div>
      </div>
    </div>
  );
}