import { useContext } from 'react';
import { NotificationContext } from './NotificationContext.js';
/**
 * Hook that returns notification functions: success, error, warning, info.
 * Must be used inside a <NotificationProvider>.
 */
export function useNotification() {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a <NotificationProvider>. ' +
            'Wrap your app (or the relevant subtree) with <NotificationProvider> inside your ThemeProvider.');
    }
    return context;
}
//# sourceMappingURL=useNotification.js.map