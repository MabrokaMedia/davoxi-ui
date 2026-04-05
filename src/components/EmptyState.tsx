import { memo } from 'react';
import type { ReactNode, ComponentType } from 'react';
import { Box, Typography, Button, alpha } from '@mui/material';

interface Props {
  icon?: ComponentType<{ sx?: object }>;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  children?: ReactNode;
}

export const EmptyState = memo(function EmptyState({ icon: Icon, title, description, actionLabel, onAction, children }: Props) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 12,
        px: 3,
        animation: 'fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {Icon && (
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: '18px',
            bgcolor: alpha('#1a1a2e', 0.04),
            border: `1px solid ${alpha('#1a1a2e', 0.06)}`,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
            // Breathing animation
            animation: 'gentlePulse 3s ease-in-out infinite',
          }}
        >
          <Icon sx={{ fontSize: 28, color: '#b0b4bb' }} />
        </Box>
      )}
      <Typography
        sx={{
          fontSize: '1.125rem',
          fontWeight: 650,
          color: '#0f0f1a',
          letterSpacing: '-0.015em',
          mb: 0.75,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          maxWidth: 380,
          mx: 'auto',
          mb: actionLabel ? 3.5 : 0,
          color: '#9ca3af',
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
      {actionLabel && onAction && (
        <Button variant="contained" onClick={onAction} size="small">
          {actionLabel}
        </Button>
      )}
      {children}
    </Box>
  );
});
