import  { React, useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Locality } from '../../types/Location';
import { useSearch } from '../../hooks/useSearch';
import { SearchResults } from './SearchResults';

interface SearchBarProps {
  onLocalitySelect: (locality: Locality) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onLocalitySelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { search, results, isLoading, error } = useSearch();

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm.trim().length >= 2) {
        search(searchTerm);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, search]);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search localities..."
          className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        {isLoading && (
          <div className="absolute right-3 top-2.5">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-500" />
          </div>
        )}
      </div>

      {error && (
        <div className="mt-2 text-sm text-red-500">
          {error}
        </div>
      )}
      
      <SearchResults 
        results={results}
        onSelect={(locality) => {
          onLocalitySelect(locality);
          setSearchTerm(locality.name);
        }}
      />
    </div>
  );
};