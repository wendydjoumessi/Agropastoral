import React from 'react';
import { DataImportIcon } from '../icons/DataImportIcon';

export function ImportPanel() {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Logique de traitement des fichiers
      console.log('Fichiers sélectionnés:', files);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <DataImportIcon size={64} className="mx-auto text-green-500 mb-4" />
        <h3 className="text-lg font-semibold mb-2">
          Importer des données
        </h3>
        <p className="text-gray-600 mb-4">
          Glissez-déposez vos fichiers Excel ou images satellites ici, ou cliquez pour sélectionner
        </p>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors">
        <input
          type="file"
          multiple
          accept=".xlsx,.xls,.csv,image/*"
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer inline-flex flex-col items-center"
        >
          <DataImportIcon size={32} className="text-gray-400 mb-2" />
          <span className="text-sm text-gray-600">
            Formats supportés: .xlsx, .xls, .csv, images satellites
          </span>
        </label>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
          <span>Excel: données des infrastructures</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
          <span>Images: données satellites</span>
        </div>
      </div>
    </div>
  );
}