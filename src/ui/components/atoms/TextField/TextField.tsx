import { TextField as MuiTextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

type TextFieldProperties = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string | number | boolean;
  'aria-autocomplete'?: string;
} & TextFieldProps;

const defaultProperties = {
  'aria-autocomplete': 'none',
};

TextField.defaultProps = defaultProperties;

export default function TextField({
  id,
  name,
  variant = 'outlined',
  'aria-autocomplete': ariaAutoComplete,
  autoComplete = 'off',
  type = 'text',
  ...rest
}: TextFieldProperties): JSX.Element {
  return (
    <MuiTextField
      aria-autocomplete={ariaAutoComplete || 'none'}
      autoComplete={autoComplete}
      id={id}
      name={name}
      type={type}
      variant={variant}
      {...rest}
    />
  );
}
