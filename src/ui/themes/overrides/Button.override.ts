import type { Theme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    home: true;
  }
}

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      variants: [
        {
          props: { variant: 'home' as const },
          style: {
            color: theme.palette.primary.main,
            textTransform: 'capitalize' as const,
            '&:hover': { backgroundColor: theme.palette.common.white },
          },
        },
      ],
    },
  };
}
