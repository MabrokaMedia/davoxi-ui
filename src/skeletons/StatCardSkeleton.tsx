import { memo } from 'react';
import { Card, CardContent, Box, Skeleton } from '@mui/material';

export const StatCardSkeleton = memo(function StatCardSkeleton() {
  return (
    <Card>
      <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Box>
            {/* Label */}
            <Skeleton variant="text" width={80} height={16} sx={{ mb: 1 }} />
            {/* Value */}
            <Skeleton variant="text" width={60} height={40} />
          </Box>
          {/* Icon placeholder */}
          <Skeleton variant="rounded" width={44} height={44} sx={{ borderRadius: '12px' }} />
        </Box>
      </CardContent>
    </Card>
  );
});
