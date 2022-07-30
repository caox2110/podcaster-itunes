import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { withVerticalCentered } from '../../../../../.storybook/preview';
import { MuiMenuItem } from '..';

import MuiTextField from '.';

const textFieldVariants = [
  {
    value: 'outlined',
    label: 'Outlined',
  },
  {
    value: 'filled',
    label: 'Filled',
  },
  {
    value: 'standard',
    label: 'Standard',
  },
];

const Template: ComponentStory<typeof MuiTextField> = (properties) => (
  <MuiTextField {...properties} />
);

const TextFieldOutlined = Template.bind({});
TextFieldOutlined.args = {
  variant: 'outlined',
};

const TextFieldFilled = Template.bind({});
TextFieldFilled.args = {
  variant: 'filled',
};

const TextFieldStandard = Template.bind({});
TextFieldStandard.args = {
  variant: 'standard',
};

const TextFieldSelect = Template.bind({});
TextFieldSelect.args = {
  select: true,
  children: textFieldVariants.map((option: { value: string; label: string }) => (
    <MuiMenuItem key={option.value} value={option.value}>
      {option.label}
    </MuiMenuItem>
  )),
};

export { TextFieldOutlined, TextFieldFilled, TextFieldStandard, TextFieldSelect };
export default {
  title: 'UI/Atoms/MuiTextField',
  component: MuiTextField,
  decorators: [withVerticalCentered],
  argTypes: {
    autoComplete: {
      options: ['on', 'off'],
      defaultValue: 'off',
      control: { type: 'radio' },
    },
    autoFocus: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    className: {
      type: { name: 'string' },
      defaultValue: '',
      control: 'text',
    },
    'data-testid': {
      type: { name: 'string' },
      control: false,
    },
    defaultValue: {
      type: { name: 'string' },
      defaultValue: '',
      control: 'text',
    },
    disabled: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    error: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    focused: {
      type: { name: 'boolean' },
      control: false,
    },
    fullWidth: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    helperText: {
      defaultValue: 'This is a helper text',
      control: {
        type: 'text',
      },
    },
    hiddenLabel: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    id: {
      type: { name: 'string' },
      defaultValue: '',
      control: 'text',
    },
    label: {
      type: { name: 'string' },
      defaultValue: 'Search',
      control: 'text',
    },
    maxRows: {
      type: { name: 'string' },
      defaultValue: '',
      control: 'text',
    },
    minRows: {
      type: { name: 'string' },
      defaultValue: '',
      control: 'text',
    },
    multiline: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    name: {
      type: { name: 'string' },
      defaultValue: '',
      control: 'text',
    },
    placeholder: {
      type: { name: 'string' },
      defaultValue: 'Search',
      control: 'text',
    },
    required: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    rows: {
      type: { name: 'string' },
      defaultValue: '',
      control: 'text',
    },
    select: {
      control: false,
    },
    type: {
      defaultValue: 'text',
      options: ['number', 'password', 'text', 'search'],
      control: { type: 'select' },
      if: { arg: 'select', truthy: false },
    },
    value: {
      type: { name: 'string' },
      defaultValue: '',
      control: 'text',
    },
    variant: {
      control: false,
    },
    onBlur: {
      table: {
        category: 'Events',
      },
    },
    onChange: {
      table: {
        category: 'Events',
      },
    },
    onFocus: {
      table: {
        category: 'Events',
      },
    },
    FormHelperTextProps: {
      table: {
        category: 'Feature Props',
      },
    },
    InputLabelProps: {
      table: {
        category: 'Feature Props',
      },
    },
    inputProps: {
      table: {
        category: 'Feature Props',
      },
    },
    InputProps: {
      table: {
        category: 'Feature Props',
      },
    },
    inputRef: {
      table: {
        category: 'Feature Props',
      },
    },
    SelectProps: {
      table: {
        category: 'Feature Props',
      },
    },
    style: {
      table: {
        category: 'Feature Props',
      },
    },
    sx: {
      table: {
        category: 'Feature Props',
      },
    },
  },
} as ComponentMeta<typeof MuiTextField>;
