import { useState, useCallback } from 'react';
import { processExcelFile, processSatelliteImage } from '../utils/fileProcessing';

interface UseFileUploadOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export function useFileUpload({ onSuccess, onError }: UseFileUploadOptions = {}) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleUpload = useCallback(async (files: FileList) => {
    setIsUploading(true);
    setError(null);

    try {
      const results = await Promise.all(
        Array.from(files).map(async (file) => {
          if (file.type.includes('excel') || file.type.includes('spreadsheet')) {
            return await processExcelFile(file);
          } else if (file.type.includes('image')) {
            return await processSatelliteImage(file);
          }
          throw new Error(`Type de fichier non supporté: ${file.type}`);
        })
      );

      onSuccess?.(results);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Une erreur est survenue');
      setError(error);
      onError?.(error);
    } finally {
      setIsUploading(false);
    }
  }, [onSuccess, onError]);

  return {
    isUploading,
    error,
    handleUpload
  };
}