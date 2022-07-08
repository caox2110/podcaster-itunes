import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type { PaletteMode, ThemeOptions } from '@mui/material';

import { constants } from '../../helper';

import { typography } from './typography.palette';

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

const theme = () => responsiveFontSizes(createTheme(getDesignOptions()));

export { theme };
