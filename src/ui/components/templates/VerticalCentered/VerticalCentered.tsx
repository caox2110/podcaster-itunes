import { ReactNode } from 'react';
import type { BoxProps } from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';

import { MuiBox, MuiGrid } from '../..';

/**
 * Type of VerticalCentered component it´s can receive the BoxProps too
 *
 * @typedef {VerticalCenteredProperties}
 */
type VerticalCenteredProperties = {
  /**
   * Child component of VerticalCentered component
   *
   * @type {?ReactNode}
   */
  children?: ReactNode;
} & BoxProps;

/**
 * Default values for VerticalCentered component props
 *
 * @type {{ children: any; className: string; }}
 */
const defaultProps = {
  children: null,
  className: '',
};

VerticalCentered.defaultProps = defaultProps;

/**
 * Component to center the childs in the screen
 *
 * @param {VerticalCenteredProperties} { children, className, ...rest }
 * @returns
 */
function VerticalCentered({ children, ...rest }: VerticalCenteredProperties) {
  return (
    <MuiBox
      component='div'
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
      {...rest}
    >
      <MuiGrid
        container
        sx={{
          justifyContent: 'center',
          padding: (theme: Theme) => theme.spacing(3),
        }}
      >
        <MuiGrid item lg={6} md={8} sm={10} xs={12}>
          {children}
        </MuiGrid>
      </MuiGrid>
    </MuiBox>
  );
}

export default VerticalCentered;
