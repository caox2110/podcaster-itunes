import type { Theme } from '@mui/material';

export default function AppBar(theme: Theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.white,
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
      },
    },
  };
}
