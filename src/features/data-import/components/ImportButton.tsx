import React from 'react';
import { DataImportIcon } from '@/components/icons/icons';

interface ImportButtonProps {
  onClick: () => void;
  className?: string;
}

export function ImportButton({ onClick, className = '' }: ImportButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg 
        bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600
        text-white font-medium shadow-sm transition-all
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${className}`}
    >
      <DataImportIcon size={20} />
      <span>Importer des données</span>
    </button>
  );
}