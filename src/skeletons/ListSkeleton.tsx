import { memo } from 'react';
import { Box, Skeleton } from '@mui/material';

interface Props {
  items?: number;
  hasAvatar?: boolean;
  hasSecondaryText?: boolean;
}

export const ListSkeleton = memo(function ListSkeleton({ items = 5, hasAvatar = false, hasSecondaryText = false }: Props) {
  return (
    <Box>
      {Array.from({ length: items }).map((_, i) => (
        <Box
          key={i}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            py: 1.5,
            px: 1,
            borderBottom: i < items - 1 ? '1px solid' : 'none',
            borderColor: 'divider',
          }}
        >
          {hasAvatar && (
            <Skeleton variant="circular" width={40} height={40} sx={{ flexShrink: 0 }} />
          )}
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="text" width="40%" height={20} />
            {hasSecondaryText && (
              <Skeleton variant="text" width="65%" height={16} sx={{ mt: 0.25 }} />
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
});
