import type { Theme } from '@mui/material/styles';

export default function AppBar(theme: Theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: theme.palette.common.white,
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
      },
      defaultProps: {
        color: 'default' as const,
      },
    },
  };
}
