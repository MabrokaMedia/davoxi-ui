import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { Box, Alert, IconButton, Slide, alpha } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NotificationContext } from './NotificationContext.js';
const SEVERITY_STYLES = {
    error: { bgcolor: '#fef2f2', borderColor: '#fecaca' },
    success: { bgcolor: '#ecfdf5', borderColor: '#a7f3d0' },
    warning: { bgcolor: '#fffbeb', borderColor: '#fde68a' },
    info: { bgcolor: '#eff6ff', borderColor: '#bfdbfe' },
};
export function NotificationStack() {
    const context = useContext(NotificationContext);
    if (!context)
        return null;
    const { notifications, dismiss } = context;
    return (_jsx(Box, { sx: {
            position: 'fixed',
            top: 24,
            right: 24,
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            maxWidth: 420,
            minWidth: 300,
        }, children: notifications.map((notification) => {
            const styles = SEVERITY_STYLES[notification.severity];
            return (_jsx(Slide, { direction: "left", in: true, mountOnEnter: true, unmountOnExit: true, children: _jsx(Alert, { severity: notification.severity, variant: "outlined", sx: {
                        bgcolor: styles.bgcolor,
                        borderColor: styles.borderColor,
                        borderRadius: '12px',
                        boxShadow: `0 4px 16px ${alpha('#0f0f1a', 0.08)}`,
                        '& .MuiAlert-message': {
                            fontSize: '0.8125rem',
                            fontWeight: 500,
                        },
                    }, action: _jsx(IconButton, { size: "small", onClick: () => dismiss(notification.id), sx: { mt: -0.25 }, children: _jsx(CloseIcon, { sx: { fontSize: 16 } }) }), children: notification.message }) }, notification.id));
        }) }));
}
//# sourceMappingURL=NotificationStack.js.map