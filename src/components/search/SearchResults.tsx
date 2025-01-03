import React from 'react';
import { Locality } from '../../types/Location';
import { SearchResultItem } from './SearchResultItem';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';

interface SearchResultsProps {
  results: Locality[];
  isLoading: boolean;
  error: string | null;
  onSelect: (locality: Locality) => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  isLoading,
  error,
  onSelect,
}) => {
  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (results.length === 0) {
    return (
      <div className="text-gray-500 text-center p-8">
        No matching localities found
      </div>
    );
  }

  return (
    <div className="space-y-1 p-2">
      {results.map((locality) => (
        <SearchResultItem
          key={locality.id}
          locality={locality}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};