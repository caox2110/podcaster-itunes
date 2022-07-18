import type { Theme } from '@mui/material';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    podcastRss: true;
  }
}

export default function Card(theme: Theme) {
  return {
    MuiCard: {
      variants: [
        {
          props: { variant: 'podcastRss' as const },
          style: {
            margin: 'auto' as const,
            borderRadius: theme.spacing(1), // 8px
            transition: '0.3s' as const,
            boxShadow: '0px 5px 10px rgba(34, 35, 58, 0.2)' as const,
            position: 'relative' as const,
            overflow: 'initial' as const,
            display: 'flex' as const,
            flexDirection: 'column' as const,
            alignItems: 'center' as const,
            marginBottom: theme.spacing(6),
            '& .MuiCardMedia-root': {
              width: '50%',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: theme.spacing(-3),
              borderRadius: '50%',
              position: 'relative',
              transform: 'translateY(-32px)',
              '&:after': {
                content: '" "',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
                borderRadius: '50%',
                opacity: 0.5,
              },
            },
          },
        },
      ],
    },
  };
}
