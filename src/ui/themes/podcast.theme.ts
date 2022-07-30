import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';

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
