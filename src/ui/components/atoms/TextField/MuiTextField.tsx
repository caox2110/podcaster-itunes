import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material';

/**
 * Type of MuiTextField component props.
 * It´s can receive the MuiTextFieldProps.
 *
 * @typedef {TextFieldProperties}
 */
type TextFieldProperties = {
  id: string;
  name: string;
  placeholder: string;
  'aria-autocomplete'?: string;
  'data-testid'?: string;
} & TextFieldProps;

/**
 * MuiTextField Component definition. An input html element.
 *
 * @export
 * @param {TextFieldProperties} {
  id,
  name,
  variant = 'outlined',
  'aria-autocomplete': ariaAutoComplete,
  autoComplete = 'off',
  type = 'text',
  'data-testid': dataTestId,
  ...rest
}
 * @returns
 */
function MuiTextField({
  id,
  name,
  variant = 'outlined',
  'aria-autocomplete': ariaAutoComplete,
  autoComplete = 'off',
  type = 'text',
  'data-testid': dataTestId,
  ...rest
}: TextFieldProperties) {
  return (
    <TextField
      aria-autocomplete={ariaAutoComplete || 'none'}
      autoComplete={autoComplete}
      id={id}
      inputProps={{ 'data-testid': dataTestId }}
      name={name}
      type={type}
      variant={variant}
      {...rest}
    />
  );
}

/**
 * Default values for MuiTextField component props
 *
 * @type {{ 'aria-autocomplete': string; 'data-testid': string; }}
 */
const defaultProps = {
  'aria-autocomplete': 'none',
  'data-testid': '',
};

MuiTextField.defaultProps = defaultProps;

export type { TextFieldProperties };
export default MuiTextField;
