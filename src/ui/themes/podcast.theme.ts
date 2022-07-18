import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type { PaletteMode, ThemeOptions } from '@mui/material';

import { constants } from '@/core/constants';

import { typography } from './typography.palette';
import { ComponentsOverrides } from './overrides';

const {
  theme: {
    MODE: { LIGHT },
  },
} = constants;

const getDesignOptions = (): ThemeOptions => ({
  palette: {
    mode: LIGHT as PaletteMode,
  },
  typography,
});

const theme = () => {
  const themeInstance = responsiveFontSizes(createTheme(getDesignOptions()));
  themeInstance.components = ComponentsOverrides(themeInstance);
  return themeInstance;
};

export { theme };
