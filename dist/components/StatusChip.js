import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Chip, alpha, Box } from '@mui/material';
export const StatusChip = memo(function StatusChip({ active, activeLabel = 'Active', inactiveLabel = 'Inactive' }) {
    return (_jsx(Chip, { size: "small", label: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 0.75 }, children: [_jsx(Box, { sx: {
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: active ? '#059669' : '#9ca3af',
                        boxShadow: active ? `0 0 0 2px ${alpha('#059669', 0.2)}` : 'none',
                    } }), active ? activeLabel : inactiveLabel] }), sx: {
            bgcolor: active ? alpha('#059669', 0.08) : alpha('#6b7280', 0.06),
            color: active ? '#047857' : '#6b7280',
            fontWeight: 550,
            fontSize: '0.6875rem',
            height: 26,
            border: `1px solid ${active ? alpha('#059669', 0.15) : alpha('#6b7280', 0.1)}`,
            '& .MuiChip-label': { px: 1 },
        } }));
});
//# sourceMappingURL=StatusChip.js.map