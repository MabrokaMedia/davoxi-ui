import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useMemo, useState } from 'react';
export const NotificationContext = createContext(null);
const MAX_NOTIFICATIONS = 3;
const DEFAULT_DURATION = 4000;
let notificationCounter = 0;
export function NotificationProvider({ children }) {
    const [notifications, setNotifications] = useState([]);
    const dismiss = useCallback((id) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    }, []);
    const addNotification = useCallback((message, severity, autoHideDuration = DEFAULT_DURATION) => {
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
    const success = useCallback((message, autoHideDuration) => addNotification(message, 'success', autoHideDuration), [addNotification]);
    const error = useCallback((message, autoHideDuration) => addNotification(message, 'error', autoHideDuration), [addNotification]);
    const warning = useCallback((message, autoHideDuration) => addNotification(message, 'warning', autoHideDuration), [addNotification]);
    const info = useCallback((message, autoHideDuration) => addNotification(message, 'info', autoHideDuration), [addNotification]);
    const value = useMemo(() => ({
        notifications,
        success,
        error,
        warning,
        info,
        dismiss,
    }), [notifications, success, error, warning, info, dismiss]);
    return (_jsx(NotificationContext.Provider, { value: value, children: children }));
}
//# sourceMappingURL=NotificationContext.js.map