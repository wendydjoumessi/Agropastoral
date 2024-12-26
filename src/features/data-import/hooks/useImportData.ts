import { useState, useCallback } from 'react';
import { ImportService } from '../services/ImportService';
import { useNotifications } from '@/hooks/useNotifications';

export function useImportData() {
  const [isImporting, setIsImporting] = useState(false);
  const { showSuccess, showError } = useNotifications();
  
  const importData = useCallback(async (files: File[]) => {
    setIsImporting(true);
    
    try {
      const results = await ImportService.importFiles(files);
      showSuccess('Import réussi');
      return results;
    } catch (error) {
      showError('Erreur lors de l\'import');
      throw error;
    } finally {
      setIsImporting(false);
    }
  }, [showSuccess, showError]);

  return {
    isImporting,
    importData
  };
}