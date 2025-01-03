import React, { useState, useCallback } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';
import type { Locality } from '../../types/Location';


interface SearchMenuProps {
  onSelect: (locality: Locality) => void;
  onClose?: () => void;
}

export const SearchMenu: React.FC<SearchMenuProps> = ({ onSelect, onClose }) => {
  const [query, setQuery] = useState('');
  const { results, isLoading, error, search } = useSearch();

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    if (value.length >= 2) {
      search(value);
    }
  }, [search]);

  const handleClear = useCallback(() => {
    setQuery('');
    search('');
  }, [search]);

  const handleSelect = useCallback((locality: Locality) => {
    onSelect(locality);
    if (onClose) onClose();
  }, [onSelect, onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="bg-white mx-auto mt-20 max-w-2xl rounded-lg shadow-lg">
        <SearchInput
          value={query}
          onChange={handleSearch}
          onClear={handleClear}
          onClose={onClose}
        />
        
        <div className="max-h-[60vh] overflow-y-auto">
          <SearchResults
            results={results}
            isLoading={isLoading}
            error={error}
            onSelect={handleSelect}
          />
        </div>
      </div>
    </div>
  );
};