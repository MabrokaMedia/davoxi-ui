import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Box, Typography, Button, Breadcrumbs, Link as MuiLink } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
export const PageHeader = memo(function PageHeader({ title, subtitle, breadcrumbs, actionLabel, onAction, actionIcon, linkComponent }) {
    return (_jsxs(Box, { sx: { mb: 4, pt: 0.5 }, children: [breadcrumbs && breadcrumbs.length > 0 && (_jsx(Breadcrumbs, { sx: { mb: 1.5 }, children: breadcrumbs.map((c, i) => c.to && linkComponent ? (_jsx(MuiLink, { component: linkComponent, to: c.to, underline: "none", sx: {
                        color: '#9ca3af',
                        fontSize: '0.8125rem',
                        fontWeight: 450,
                        transition: 'color 0.15s ease',
                        '&:hover': { color: '#374151' },
                    }, children: c.label }, i)) : c.to ? (_jsx(MuiLink, { href: c.to, underline: "none", sx: {
                        color: '#9ca3af',
                        fontSize: '0.8125rem',
                        fontWeight: 450,
                        transition: 'color 0.15s ease',
                        '&:hover': { color: '#374151' },
                    }, children: c.label }, i)) : (_jsx(Typography, { sx: { color: '#374151', fontSize: '0.8125rem', fontWeight: 550 }, children: c.label }, i))) })), _jsxs(Box, { sx: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 3 }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "h1", sx: {
                                    background: 'linear-gradient(135deg, #0f0f1a 0%, #3a3a5e 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }, children: title }), subtitle && (_jsx(Typography, { variant: "body2", sx: { mt: 0.5, color: '#9ca3af', fontSize: '0.875rem' }, children: subtitle }))] }), actionLabel && onAction && (_jsx(Button, { variant: "contained", startIcon: actionIcon || _jsx(AddIcon, { sx: { fontSize: '18px !important' } }), onClick: onAction, sx: { flexShrink: 0, mt: 0.25 }, children: actionLabel }))] })] }));
});
//# sourceMappingURL=PageHeader.js.map