import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Box, Skeleton } from '@mui/material';
export const ListSkeleton = memo(function ListSkeleton({ items = 5, hasAvatar = false, hasSecondaryText = false }) {
    return (_jsx(Box, { children: Array.from({ length: items }).map((_, i) => (_jsxs(Box, { sx: {
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                py: 1.5,
                px: 1,
                borderBottom: i < items - 1 ? '1px solid' : 'none',
                borderColor: 'divider',
            }, children: [hasAvatar && (_jsx(Skeleton, { variant: "circular", width: 40, height: 40, sx: { flexShrink: 0 } })), _jsxs(Box, { sx: { flex: 1 }, children: [_jsx(Skeleton, { variant: "text", width: "40%", height: 20 }), hasSecondaryText && (_jsx(Skeleton, { variant: "text", width: "65%", height: 16, sx: { mt: 0.25 } }))] })] }, i))) }));
});
//# sourceMappingURL=ListSkeleton.js.map