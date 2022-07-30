import { Link as RouterLink } from 'react-router-dom';
import type { CardActionAreaProps } from '@mui/material/CardActionArea';

import { MuiCardActionArea } from '../..';

type CardActionAreaWithNavigationType = {
  /**
   * Children react element
   *
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
  /**
   * Route go to
   *
   * @type {(string | number)}
   */
  route: string;
} & CardActionAreaProps;

export type { CardActionAreaWithNavigationType };

export default function CardActionAreaWithNavigation({
  children,
  route,
  ...rest
}: CardActionAreaWithNavigationType) {
  return (
    <MuiCardActionArea {...{ component: RouterLink, to: route }} {...rest}>
      {children}
    </MuiCardActionArea>
  );
}
