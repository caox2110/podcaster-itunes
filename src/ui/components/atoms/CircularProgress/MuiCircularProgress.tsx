import CircularProgress from '@mui/material/CircularProgress';
import type { CircularProgressProps } from '@mui/material/CircularProgress';

/**
 * CircularProgress Component definition.
 *
 * @export
 * @param {CircularProgressProps} { ...rest }
 * @returns {*}
 */
export default function MuiCircularProgress({ ...rest }: CircularProgressProps) {
  return <CircularProgress {...rest} />;
}
