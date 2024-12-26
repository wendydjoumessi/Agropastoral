import { useState, useCallback } from 'react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { ...notification, id }]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  }, []);

  const showSuccess = useCallback((message: string) => {
    addNotification({ type: 'success', message });
  }, [addNotification]);

  const showError = useCallback((message: string) => {
    addNotification({ type: 'error', message });
  }, [addNotification]);

  const showInfo = useCallback((message: string) => {
    addNotification({ type: 'info', message });
  }, [addNotification]);

  return {
    notifications,
    showSuccess,
    showError,
    showInfo
  };
}