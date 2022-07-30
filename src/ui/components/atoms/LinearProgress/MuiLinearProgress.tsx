import LinearProgress from '@mui/material/LinearProgress';
import type { LinearProgressProps } from '@mui/material/LinearProgress';

/**
 * LinearProgress Component definition.
 *
 * @export
 * @param {LinearProgressProps} { ...rest }
 * @returns {*}
 */
export default function MuiLinearProgress({ ...rest }: LinearProgressProps) {
  return <LinearProgress {...rest} />;
}
