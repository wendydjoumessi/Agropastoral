import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onClose?: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onClear,
  onClose,
}) => (
  <div className="p-4 border-b">
    <div className="flex items-center gap-3">
      <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search localities..."
        className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400"
        autoFocus
      />
      {value && (
        <button 
          onClick={onClear}
          className="p-1 hover:bg-gray-100 rounded"
          aria-label="Clear search"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
      )}
      {onClose && (
        <button 
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded"
          aria-label="Close search"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  </div>
);