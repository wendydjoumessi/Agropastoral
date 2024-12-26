import React, { useState } from 'react';
import { ImportButton } from '@/features/data-import/components/ImportButton';
import { ImportPanel } from '@/features/data-import/components/ImportPanel';

interface MapHeaderProps {
  title: string;
}

export function MapHeader({ title }: MapHeaderProps) {
  const [showImportPanel, setShowImportPanel] = useState(false);

  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="relative">
        <ImportButton onClick={() => setShowImportPanel(true)} />
        
        {showImportPanel && (
          <div className="absolute right-0 top-12 z-50 w-96">
            <button
              onClick={() => setShowImportPanel(false)}
              className="absolute top-2 right-2 z-10 text-gray-500 hover:text-gray-700"
            >
              <span className="sr-only">Fermer</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <ImportPanel />
          </div>
        )}
      </div>
    </div>
  );
}