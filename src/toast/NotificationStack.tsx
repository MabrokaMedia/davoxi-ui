import { useContext } from 'react';
import { Box, Alert, IconButton, Slide, alpha } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NotificationContext } from './NotificationContext.js';
import type { Notification } from './NotificationContext.js';

const SEVERITY_STYLES: Record<Notification['severity'], { bgcolor: string; borderColor: string }> = {
  error:   { bgcolor: '#fef2f2', borderColor: '#fecaca' },
  success: { bgcolor: '#ecfdf5', borderColor: '#a7f3d0' },
  warning: { bgcolor: '#fffbeb', borderColor: '#fde68a' },
  info:    { bgcolor: '#eff6ff', borderColor: '#bfdbfe' },
};

export function NotificationStack() {
  const context = useContext(NotificationContext);
  if (!context) return null;

  const { notifications, dismiss } = context;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 24,
        right: 24,
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        maxWidth: 420,
        minWidth: 300,
      }}
    >
      {notifications.map((notification) => {
        const styles = SEVERITY_STYLES[notification.severity];
        return (
          <Slide key={notification.id} direction="left" in mountOnEnter unmountOnExit>
            <Alert
              severity={notification.severity}
              variant="outlined"
              sx={{
                bgcolor: styles.bgcolor,
                borderColor: styles.borderColor,
                borderRadius: '12px',
                boxShadow: `0 4px 16px ${alpha('#0f0f1a', 0.08)}`,
                '& .MuiAlert-message': {
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                },
              }}
              action={
                <IconButton
                  size="small"
                  onClick={() => dismiss(notification.id)}
                  sx={{ mt: -0.25 }}
                >
                  <CloseIcon sx={{ fontSize: 16 }} />
                </IconButton>
              }
            >
              {notification.message}
            </Alert>
          </Slide>
        );
      })}
    </Box>
  );
}
