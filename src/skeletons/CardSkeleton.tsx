import { memo } from 'react';
import { Card, CardContent, Box, Skeleton } from '@mui/material';

interface Props {
  lines?: number;
  hasAvatar?: boolean;
}

export const CardSkeleton = memo(function CardSkeleton({ lines = 3, hasAvatar = false }: Props) {
  return (
    <Card sx={{ borderRadius: '14px' }}>
      <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
        {/* Title bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          {hasAvatar && (
            <Skeleton variant="circular" width={40} height={40} />
          )}
          <Skeleton variant="text" width="45%" height={24} />
        </Box>
        {/* Content lines */}
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton
            key={i}
            variant="text"
            width={i === lines - 1 ? '60%' : '100%'}
            height={18}
            sx={{ mb: i < lines - 1 ? 1 : 0 }}
          />
        ))}
      </CardContent>
    </Card>
  );
});
