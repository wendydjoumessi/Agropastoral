import { useState, useCallback } from 'react';
import { Locality } from '../types/Location';
import { searchLocalities } from '../services/localityService';
import { useDebounce } from './useDebounce';

export function useSearch() {
  const [results, setResults] = useState<Locality[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearch = useDebounce(async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await searchLocalities(query);
      setResults(data);
    } catch (err) {
      setError('Failed to search localities. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  }, 300);

  const search = useCallback((query: string) => {
    debouncedSearch(query);
  }, [debouncedSearch]);

  return { results, isLoading, error, search };
}