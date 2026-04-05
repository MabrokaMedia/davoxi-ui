import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, alpha } from '@mui/material';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
export const ConfirmDialog = memo(function ConfirmDialog({ open, title, message, confirmLabel = 'Delete', loading, destructive = true, onConfirm, onCancel }) {
    const isDestructive = destructive !== false;
    return (_jsxs(Dialog, { open: open, onClose: onCancel, maxWidth: "xs", fullWidth: true, slotProps: {
            backdrop: { sx: { backdropFilter: 'blur(4px)', bgcolor: alpha('#0f0f1a', 0.2) } },
        }, children: [_jsx(DialogTitle, { sx: { pb: 0.5, pt: 3 }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1.5 }, children: [_jsx(Box, { sx: {
                                width: 38,
                                height: 38,
                                borderRadius: '10px',
                                bgcolor: isDestructive ? '#fef2f2' : alpha('#1a1a2e', 0.06),
                                border: `1px solid ${isDestructive ? '#fecaca' : alpha('#1a1a2e', 0.1)}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }, children: _jsx(WarningAmberRoundedIcon, { sx: { fontSize: 20, color: isDestructive ? '#dc2626' : '#6b7280' } }) }), _jsx(Typography, { sx: { fontWeight: 650, fontSize: '1.0625rem', letterSpacing: '-0.01em' }, children: title })] }) }), _jsx(DialogContent, { sx: { pt: 1.5 }, children: _jsx(Typography, { variant: "body2", sx: { color: '#6b7280', lineHeight: 1.6, pl: 6.5 }, children: message }) }), _jsxs(DialogActions, { sx: { px: 3, pb: 3, pt: 1, gap: 1 }, children: [_jsx(Button, { onClick: onCancel, variant: "outlined", size: "small", disabled: loading, children: "Cancel" }), _jsx(Button, { onClick: onConfirm, variant: "contained", color: isDestructive ? 'error' : 'primary', size: "small", disabled: loading, sx: isDestructive ? {
                            background: loading ? undefined : 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                            boxShadow: loading ? undefined : `0 1px 3px ${alpha('#dc2626', 0.25)}`,
                            '&:hover': {
                                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                boxShadow: `0 4px 12px ${alpha('#dc2626', 0.3)}`,
                            },
                        } : {}, children: loading ? 'Processing...' : confirmLabel })] })] }));
});
//# sourceMappingURL=ConfirmDialog.js.map