import React from 'react';
import { ToolbarSection } from './ToolbarSection';
import { ToolbarActions } from './ToolbarActions';
import { ImportPanel } from './ImportPanel';
import { useToolbarActions } from './hooks/useToolbarActions';
import { NotificationsPanel } from '../notifications/NotificationsPanel';
import { SettingsPanel } from '../settings/SettingsPanel';

export function Toolbar() {
  const {
    showImportDialog,
    showNotifications,
    showSettings,
    handleAction,
    closeImportDialog,
    closeNotifications,
    closeSettings
  } = useToolbarActions();

  return (
    <>
      <div className="bg-white shadow-md mb-6 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <ToolbarSection onAction={handleAction} />
            <ToolbarActions onAction={handleAction} />
          </div>
        </div>
      </div>

      {showImportDialog && <ImportPanel onClose={closeImportDialog} />}
      {showNotifications && <NotificationsPanel onClose={closeNotifications} />}
      {showSettings && <SettingsPanel onClose={closeSettings} />}
    </>
  );
}