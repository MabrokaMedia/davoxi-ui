import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Card, CardContent, Box, Skeleton } from '@mui/material';
export const StatCardSkeleton = memo(function StatCardSkeleton() {
    return (_jsx(Card, { children: _jsx(CardContent, { sx: { p: 3, '&:last-child': { pb: 3 } }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }, children: [_jsxs(Box, { children: [_jsx(Skeleton, { variant: "text", width: 80, height: 16, sx: { mb: 1 } }), _jsx(Skeleton, { variant: "text", width: 60, height: 40 })] }), _jsx(Skeleton, { variant: "rounded", width: 44, height: 44, sx: { borderRadius: '12px' } })] }) }) }));
});
//# sourceMappingURL=StatCardSkeleton.js.map