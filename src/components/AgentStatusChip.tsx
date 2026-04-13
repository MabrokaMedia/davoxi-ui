import { memo } from 'react';
import { Chip, alpha, Box } from '@mui/material';

type AgentStatus = 'draft' | 'published' | 'paused';

interface Props {
  status: AgentStatus;
}

export const AgentStatusChip = memo(function AgentStatusChip({ status }: Props) {
  const isLive = status === 'published';

  return (
    <Chip
      size="small"
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              bgcolor: isLive ? '#059669' : '#9ca3af',
              boxShadow: isLive ? `0 0 0 2px ${alpha('#059669', 0.2)}` : 'none',
              animation: isLive ? 'pulse 2s ease-in-out infinite' : 'none',
              '@keyframes pulse': {
                '0%, 100%': { boxShadow: `0 0 0 2px ${alpha('#059669', 0.2)}` },
                '50%': { boxShadow: `0 0 0 4px ${alpha('#059669', 0.1)}` },
              },
            }}
          />
          {isLive ? 'Live' : 'Off'}
        </Box>
      }
      sx={{
        bgcolor: isLive ? alpha('#059669', 0.08) : alpha('#6b7280', 0.06),
        color: isLive ? '#047857' : '#6b7280',
        fontWeight: 600,
        fontSize: '0.75rem',
        height: 26,
        border: `1px solid ${isLive ? alpha('#059669', 0.15) : alpha('#6b7280', 0.1)}`,
        '& .MuiChip-label': { px: 1 },
      }}
    />
  );
});
