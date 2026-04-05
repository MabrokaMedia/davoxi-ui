import { memo } from 'react';
import { Box, Skeleton } from '@mui/material';

interface Props {
  rows?: number;
  columns?: number;
}

export const TableSkeleton = memo(function TableSkeleton({ rows = 5, columns = 4 }: Props) {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden', borderRadius: '14px', border: '1px solid', borderColor: 'divider' }}>
      {/* Header row */}
      <Box sx={{ display: 'flex', gap: 2, px: 2.5, py: 1.5, bgcolor: 'action.hover' }}>
        {Array.from({ length: columns }).map((_, i) => (
          <Box key={i} sx={{ flex: 1 }}>
            <Skeleton variant="rectangular" height={16} width="70%" sx={{ borderRadius: 0.5 }} />
          </Box>
        ))}
      </Box>
      {/* Body rows */}
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <Box
          key={rowIdx}
          sx={{
            display: 'flex',
            gap: 2,
            px: 2.5,
            py: 1.5,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          {Array.from({ length: columns }).map((_, colIdx) => (
            <Box key={colIdx} sx={{ flex: 1 }}>
              <Skeleton
                variant="rectangular"
                height={14}
                width={colIdx === 0 ? '80%' : '60%'}
                sx={{ borderRadius: 0.5 }}
              />
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
});
