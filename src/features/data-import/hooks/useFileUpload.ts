import { useState, useCallback } from 'react';
import { processFiles } from '../utils/fileProcessing';

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
      const results = await processFiles(files);
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