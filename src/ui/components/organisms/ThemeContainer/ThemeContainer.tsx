import { ReactNode, useMemo } from 'react';
import { StyledEngineProvider } from '@mui/system';
import { CacheProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';
import type { Theme } from '@mui/material';
import type { EmotionCache } from '@emotion/cache';

import { constants } from '@/core/constants';

import { MuiThemeProvider, MuiCssBaseLine } from '../..';
import { EmotionCacheFactory, theme } from '../../..';

const {
  theme: { EMOTION_CACHE_KEY },
} = constants;

export default function ThemeContainer({ children }: { children: ReactNode }) {
  const clientSideEmotionCache = useMemo<EmotionCache>(
    () => EmotionCacheFactory.makeCache({ key: EMOTION_CACHE_KEY }),
    [],
  );
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
