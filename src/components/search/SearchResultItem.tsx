import React from 'react';
import { MapPin } from 'lucide-react';
import { Locality } from '../../types/Location';

interface SearchResultItemProps {
  locality: Locality;
  onSelect: (locality: Locality) => void;
}

export const SearchResultItem: React.FC<SearchResultItemProps> = ({ locality, onSelect }) => (
  <button
    onClick={() => onSelect(locality)}
    className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors group"
  >
    <div className="flex items-start gap-3">
      <MapPin className="w-5 h-5 text-gray-400 mt-1 group-hover:text-gray-600" />
      <div className="flex-1 min-w-0">
        <div className="font-medium truncate">{locality.name}</div>
        <div className="text-sm text-gray-500 mt-1 flex items-center flex-wrap gap-2">
          <span>{locality.waterPoints.length} water points</span>
          {locality.hasGreenPastures && (
            <>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>Green pastures</span>
            </>
          )}
          {locality.hasRoads && (
            <>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>Road access</span>
            </>
          )}
        </div>
      </div>
    </div>
  </button>
);