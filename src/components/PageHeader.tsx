import { memo } from 'react';
import type { ComponentType, ReactNode } from 'react';
import { Box, Typography, Button, Breadcrumbs, Link as MuiLink } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  actionLabel?: string;
  onAction?: () => void;
  actionIcon?: ReactNode;
  /** Router link component (e.g. react-router-dom Link). Receives { to, children } props. */
  linkComponent?: ComponentType<{ to: string; children: ReactNode }>;
}

export const PageHeader = memo(function PageHeader({ title, subtitle, breadcrumbs, actionLabel, onAction, actionIcon, linkComponent }: Props) {
  return (
    <Box sx={{ mb: 4, pt: 0.5 }}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs sx={{ mb: 1.5 }}>
          {breadcrumbs.map((c, i) =>
            c.to && linkComponent ? (
              <MuiLink
                key={i}
                component={linkComponent}
                to={c.to}
                underline="none"
                sx={{
                  color: '#9ca3af',
                  fontSize: '0.8125rem',
                  fontWeight: 450,
                  transition: 'color 0.15s ease',
                  '&:hover': { color: '#374151' },
                }}
              >
                {c.label}
              </MuiLink>
            ) : c.to ? (
              <MuiLink
                key={i}
                href={c.to}
                underline="none"
                sx={{
                  color: '#9ca3af',
                  fontSize: '0.8125rem',
                  fontWeight: 450,
                  transition: 'color 0.15s ease',
                  '&:hover': { color: '#374151' },
                }}
              >
                {c.label}
              </MuiLink>
            ) : (
              <Typography key={i} sx={{ color: '#374151', fontSize: '0.8125rem', fontWeight: 550 }}>
                {c.label}
              </Typography>
            )
          )}
        </Breadcrumbs>
      )}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 3 }}>
        <Box>
          <Typography
            variant="h1"
            sx={{
              background: 'linear-gradient(135deg, #0f0f1a 0%, #3a3a5e 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="body2"
              sx={{ mt: 0.5, color: '#9ca3af', fontSize: '0.875rem' }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
        {actionLabel && onAction && (
          <Button
            variant="contained"
            startIcon={actionIcon || <AddIcon sx={{ fontSize: '18px !important' }} />}
            onClick={onAction}
            sx={{ flexShrink: 0, mt: 0.25 }}
          >
            {actionLabel}
          </Button>
        )}
      </Box>
    </Box>
  );
});
