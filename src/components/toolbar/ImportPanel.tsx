import React from 'react';
import { FileSpreadsheet, Satellite } from 'lucide-react';

export function ImportPanel({ onClose }: { onClose: () => void }) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Logique d'importation simplifiée
      console.log('Fichiers à importer:', files);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-xl">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Importer des données</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Fermer</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FileSpreadsheet className="h-8 w-8 text-green-500" />
                <div>
                  <h3 className="font-medium">Données Excel</h3>
                  <p className="text-sm text-gray-600">Importez vos fichiers .xlsx ou .csv</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Satellite className="h-8 w-8 text-blue-500" />
                <div>
                  <h3 className="font-medium">Images Satellites</h3>
                  <p className="text-sm text-gray-600">Importez vos images satellites</p>
                </div>
              </div>

              <div className="mt-6">
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
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"
                >
                  Sélectionner des fichiers
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}