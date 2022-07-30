import Card from '@mui/material/Card';
import type { CardProps } from '@mui/material/Card';

/**
 * Card Component definition.
 *
 * @export
 * @param {CardProps} { ...rest }
 * @returns {*}
 */
export default function MuiCard({ ...rest }: CardProps) {
  return <Card {...rest} />;
}
