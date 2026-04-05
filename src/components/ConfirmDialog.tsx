import { memo } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, alpha } from '@mui/material';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

interface Props {
  open: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  loading?: boolean;
  destructive?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog = memo(function ConfirmDialog({ open, title, message, confirmLabel = 'Delete', loading, destructive = true, onConfirm, onCancel }: Props) {
  const isDestructive = destructive !== false;

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      maxWidth="xs"
      fullWidth
      slotProps={{
        backdrop: { sx: { backdropFilter: 'blur(4px)', bgcolor: alpha('#0f0f1a', 0.2) } },
      }}
    >
      <DialogTitle sx={{ pb: 0.5, pt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: '10px',
              bgcolor: isDestructive ? '#fef2f2' : alpha('#1a1a2e', 0.06),
              border: `1px solid ${isDestructive ? '#fecaca' : alpha('#1a1a2e', 0.1)}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <WarningAmberRoundedIcon sx={{ fontSize: 20, color: isDestructive ? '#dc2626' : '#6b7280' }} />
          </Box>
          <Typography sx={{ fontWeight: 650, fontSize: '1.0625rem', letterSpacing: '-0.01em' }}>
            {title}
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ pt: 1.5 }}>
        <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.6, pl: 6.5 }}>
          {message}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3, pt: 1, gap: 1 }}>
        <Button onClick={onCancel} variant="outlined" size="small" disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          color={isDestructive ? 'error' : 'primary'}
          size="small"
          disabled={loading}
          sx={isDestructive ? {
            background: loading ? undefined : 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
            boxShadow: loading ? undefined : `0 1px 3px ${alpha('#dc2626', 0.25)}`,
            '&:hover': {
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              boxShadow: `0 4px 12px ${alpha('#dc2626', 0.3)}`,
            },
          } : {}}
        >
          {loading ? 'Processing...' : confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
});
