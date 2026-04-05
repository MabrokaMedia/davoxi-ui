import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Box, Skeleton } from '@mui/material';
export const TableSkeleton = memo(function TableSkeleton({ rows = 5, columns = 4 }) {
    return (_jsxs(Box, { sx: { width: '100%', overflow: 'hidden', borderRadius: '14px', border: '1px solid', borderColor: 'divider' }, children: [_jsx(Box, { sx: { display: 'flex', gap: 2, px: 2.5, py: 1.5, bgcolor: 'action.hover' }, children: Array.from({ length: columns }).map((_, i) => (_jsx(Box, { sx: { flex: 1 }, children: _jsx(Skeleton, { variant: "rectangular", height: 16, width: "70%", sx: { borderRadius: 0.5 } }) }, i))) }), Array.from({ length: rows }).map((_, rowIdx) => (_jsx(Box, { sx: {
                    display: 'flex',
                    gap: 2,
                    px: 2.5,
                    py: 1.5,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }, children: Array.from({ length: columns }).map((_, colIdx) => (_jsx(Box, { sx: { flex: 1 }, children: _jsx(Skeleton, { variant: "rectangular", height: 14, width: colIdx === 0 ? '80%' : '60%', sx: { borderRadius: 0.5 } }) }, colIdx))) }, rowIdx)))] }));
});
//# sourceMappingURL=TableSkeleton.js.map