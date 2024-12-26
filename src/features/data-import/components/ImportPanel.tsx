import React from 'react';
import { useFileUpload } from '../hooks/useFileUpload';
import { FileUploadZone } from './FileUploadZone';
import { ImportTypesList } from './ImportTypesList';

export function ImportPanel() {
  const { isUploading, error, handleUpload } = useFileUpload({
    onSuccess: (data) => {
      console.log('Données importées:', data);
    },
    onError: (error) => {
      console.error('Erreur d\'importation:', error);
    }
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Importer des données</h3>
      
      <FileUploadZone
        isUploading={isUploading}
        onUpload={handleUpload}
      />
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md">
          {error.message}
        </div>
      )}

      <ImportTypesList />
    </div>
  );
}