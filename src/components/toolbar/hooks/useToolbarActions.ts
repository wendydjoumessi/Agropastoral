import { useState, useCallback } from 'react';

export function useToolbarActions() {
  const [showImportDialog, setShowImportDialog] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleAction = useCallback((action: string) => {
    switch (action) {
      case 'SHOW_IMPORT_DIALOG':
        setShowImportDialog(true);
        break;
      case 'SHOW_NOTIFICATIONS':
        setShowNotifications(true);
        break;
      case 'SHOW_SETTINGS':
        setShowSettings(true);
        break;
      case 'EXPORT_DATA':
        console.log('Exporting data...');
        break;
      // Ajoutez d'autres actions ici
      default:
        console.log(`Action non gérée: ${action}`);
    }
  }, []);

  return {
    showImportDialog,
    showNotifications,
    showSettings,
    handleAction,
    closeImportDialog: () => setShowImportDialog(false),
    closeNotifications: () => setShowNotifications(false),
    closeSettings: () => setShowSettings(false)
  };
}