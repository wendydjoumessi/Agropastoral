import React from 'react';
import { DataImportIcon } from '@/components/icons/icons';

interface FileUploadZoneProps {
  isUploading: boolean;
  onUpload: (files: FileList) => void;
}

export function FileUploadZone({ isUploading, onUpload }: FileUploadZoneProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      onUpload(files);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors">
      <input
        type="file"
        multiple
        accept=".xlsx,.xls,.csv,image/*"
        onChange={handleChange}
        className="hidden"
        id="file-upload"
        disabled={isUploading}
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer inline-flex flex-col items-center"
      >
        <DataImportIcon size={32} className="text-gray-400 mb-2" />
        <span className="text-sm text-gray-600">
          {isUploading 
            ? 'Importation en cours...'
            : 'Glissez-déposez vos fichiers ou cliquez pour sélectionner'}
        </span>
        <span className="text-xs text-gray-500 mt-1">
          Formats supportés: .xlsx, .xls, .csv, images satellites
        </span>
      </label>
    </div>
  );
}