import type { Theme } from '@mui/material/styles';

import CssBaseline from './CssBaseline.override';
import AppBar from './AppBar.override';
import Button from './Button.override';
import Card from './Card.override';

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(CssBaseline(), AppBar(theme), Button(theme), Card(theme));
}
