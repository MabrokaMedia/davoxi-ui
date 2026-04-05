import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Card, CardContent, Box, Skeleton } from '@mui/material';
export const CardSkeleton = memo(function CardSkeleton({ lines = 3, hasAvatar = false }) {
    return (_jsx(Card, { sx: { borderRadius: '14px' }, children: _jsxs(CardContent, { sx: { p: 3, '&:last-child': { pb: 3 } }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }, children: [hasAvatar && (_jsx(Skeleton, { variant: "circular", width: 40, height: 40 })), _jsx(Skeleton, { variant: "text", width: "45%", height: 24 })] }), Array.from({ length: lines }).map((_, i) => (_jsx(Skeleton, { variant: "text", width: i === lines - 1 ? '60%' : '100%', height: 18, sx: { mb: i < lines - 1 ? 1 : 0 } }, i)))] }) }));
});
//# sourceMappingURL=CardSkeleton.js.map