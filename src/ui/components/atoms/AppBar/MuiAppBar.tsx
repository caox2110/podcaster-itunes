import AppBar from '@mui/material/AppBar';
import type { AppBarProps } from '@mui/material/AppBar';

/**
 * AppBar Component definition.
 *
 * @export
 * @param {AppBarProps & PaperProps} { ...rest }
 * @returns {*}
 */
export default function MuiAppBar({ ...rest }: AppBarProps) {
  return <AppBar {...rest} />;
}
