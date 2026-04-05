import { createContext, useCallback, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type NotificationSeverity = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  message: string;
  severity: NotificationSeverity;
  autoHideDuration: number;
}

export interface NotificationContextValue {
  notifications: Notification[];
  success: (message: string, autoHideDuration?: number) => void;
  error: (message: string, autoHideDuration?: number) => void;
  warning: (message: string, autoHideDuration?: number) => void;
  info: (message: string, autoHideDuration?: number) => void;
  dismiss: (id: string) => void;
}

export const NotificationContext = createContext<NotificationContextValue | null>(null);

const MAX_NOTIFICATIONS = 3;
const DEFAULT_DURATION = 4000;

let notificationCounter = 0;

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const dismiss = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const addNotification = useCallback((message: string, severity: NotificationSeverity, autoHideDuration: number = DEFAULT_DURATION) => {
    const id = `notification-${++notificationCounter}`;
    setNotifications(prev => {
      const next = [...prev, { id, message, severity, autoHideDuration }];
      // Keep only the last MAX_NOTIFICATIONS
      return next.slice(-MAX_NOTIFICATIONS);
    });

    // Auto-dismiss
    if (autoHideDuration > 0) {
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, autoHideDuration);
    }
  }, []);

  const success = useCallback((message: string, autoHideDuration?: number) => addNotification(message, 'success', autoHideDuration), [addNotification]);
  const error = useCallback((message: string, autoHideDuration?: number) => addNotification(message, 'error', autoHideDuration), [addNotification]);
  const warning = useCallback((message: string, autoHideDuration?: number) => addNotification(message, 'warning', autoHideDuration), [addNotification]);
  const info = useCallback((message: string, autoHideDuration?: number) => addNotification(message, 'info', autoHideDuration), [addNotification]);

  const value = useMemo<NotificationContextValue>(() => ({
    notifications,
    success,
    error,
    warning,
    info,
    dismiss,
  }), [notifications, success, error, warning, info, dismiss]);

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}
