import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

/**
 * Type of MuiButton component props.
 * It´s can receive the ButtonProps and React.ButtonHTMLAttributes<HTMLButtonElement>.
 *
 * @typedef {ButtonProperties}
 */
type ButtonProperties = {
  children: ReactNode;
  'data-testid'?: string;
} & ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * MuiButton Component definition. An button html element.
 *
 * @param {ButtonProperties} { children, 'data-testid': dataTestId, ...rest }
 * @returns
 */
function MuiButton({ children, 'data-testid': dataTestId, ...rest }: ButtonProperties) {
  return (
    <Button data-testid={dataTestId} {...rest}>
      {children}
    </Button>
  );
}

/**
 * Default values for MuiButton component props
 *
 * @type {{ 'data-testid': string; color: string; variant: string; }}
 */
const defaultProps = {
  'data-testid': '',
  color: 'primary',
  variant: 'outlined',
};

MuiButton.defaultProps = defaultProps;

export type { ButtonProperties };
export default MuiButton;
