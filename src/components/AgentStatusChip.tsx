import { memo } from 'react';
import { Chip, alpha, Box } from '@mui/material';

type AgentStatus = 'draft' | 'published' | 'paused';

const STATUS_CONFIG: Record<AgentStatus, { label: string; color: string; bg: string; border: string }> = {
  draft: {
    label: 'Draft',
    color: '#6b7280',
    bg: alpha('#6b7280', 0.06),
    border: alpha('#6b7280', 0.1),
  },
  published: {
    label: 'Published',
    color: '#047857',
    bg: alpha('#059669', 0.08),
    border: alpha('#059669', 0.15),
  },
  paused: {
    label: 'Paused',
    color: '#b45309',
    bg: alpha('#d97706', 0.08),
    border: alpha('#d97706', 0.15),
  },
};

const DOT_COLORS: Record<AgentStatus, string> = {
  draft: '#9ca3af',
  published: '#059669',
  paused: '#d97706',
};

interface Props {
  status: AgentStatus;
}

export const AgentStatusChip = memo(function AgentStatusChip({ status }: Props) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.draft;
  const dotColor = DOT_COLORS[status] || DOT_COLORS.draft;

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
              bgcolor: dotColor,
              boxShadow: status === 'published' ? `0 0 0 2px ${alpha(dotColor, 0.2)}` : 'none',
            }}
          />
          {config.label}
        </Box>
      }
      sx={{
        bgcolor: config.bg,
        color: config.color,
        fontWeight: 550,
        fontSize: '0.6875rem',
        height: 26,
        border: `1px solid ${config.border}`,
        '& .MuiChip-label': { px: 1 },
      }}
    />
  );
});
