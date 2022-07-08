import { ReactNode, useMemo } from 'react';
import { StyledEngineProvider } from '@mui/system';
import { CacheProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';
import type { Theme } from '@mui/material';
import type { EmotionCache } from '@emotion/cache';

import { MuiThemeProvider, MuiCssBaseLine } from '../..';
import { createEmotionCache, theme } from '../../..';

export default function ThemeContainer({ children }: { children: ReactNode }): JSX.Element {
  const clientSideEmotionCache = useMemo<EmotionCache>(() => createEmotionCache(), []);
  const themeOptions = useMemo<Theme>(() => theme(), []);

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <HelmetProvider>
        <StyledEngineProvider injectFirst>
          <MuiCssBaseLine />
          <MuiThemeProvider theme={themeOptions}>{children}</MuiThemeProvider>
        </StyledEngineProvider>
      </HelmetProvider>
    </CacheProvider>
  );
}
