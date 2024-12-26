import React from 'react';
import { DataImportIcon } from '../icons/DataImportIcon';

interface ImportButtonProps {
  onImport: () => void;
  className?: string;
}

export function ImportButton({ onImport, className = '' }: ImportButtonProps) {
  return (
    <button
      onClick={onImport}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg 
        bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600
        text-white font-medium transition-colors
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${className}`}
    >
      <DataImportIcon size={20} className="text-white" />
      <span>Importer des données</span>
    </button>
  );
}