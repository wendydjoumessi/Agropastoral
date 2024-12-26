import React from 'react';
import { Bell } from 'lucide-react';

interface NotificationsPanelProps {
  onClose: () => void;
}

export function NotificationsPanel({ onClose }: NotificationsPanelProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-blue-500" />
              <h2 className="text-lg font-semibold">Notifications</h2>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Fermer</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="p-4">
            <div className="space-y-4">
              {/* Exemple de notification */}
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="flex-shrink-0">
                  <Bell className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Nouvelle alerte météo</p>
                  <p className="text-sm text-gray-500">Prévision de fortes pluies pour demain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}