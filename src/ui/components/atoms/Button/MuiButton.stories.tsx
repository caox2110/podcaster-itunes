import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { withVerticalCentered } from '../../../../../.storybook/preview';

import MuiButton from '.';

const Template: ComponentStory<typeof MuiButton> = (properties) => <MuiButton {...properties} />;

const ButtonText = Template.bind({});
ButtonText.args = {
  variant: 'text',
  children: 'Podcaster',
};

const ButtonHome = Template.bind({});
ButtonHome.args = {
  variant: 'home',
  children: 'Podcaster',
};

const ButtonOutlined = Template.bind({});
ButtonOutlined.args = {
  variant: 'outlined',
  children: 'Podcaster',
};

const ButtonContained = Template.bind({});
ButtonContained.args = {
  variant: 'contained',
  children: 'Podcaster',
};

export { ButtonText, ButtonHome, ButtonOutlined, ButtonContained };
export default {
  title: 'UI/Atoms/Button',
  component: MuiButton,
  decorators: [withVerticalCentered],
  argTypes: {
    centerRipple: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    'data-testid': {
      type: { name: 'string' },
      control: false,
    },
    disabled: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disableElevation: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disableFocusRipple: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disableRipple: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disableTouchRipple: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    focusRipple: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    focusVisibleClassName: {
      type: { name: 'string' },
      defaultValue: '',
      control: 'text',
    },
    fullWidth: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    href: {
      type: { name: 'string' },
      defaultValue: '',
      control: 'text',
    },
    tabIndex: {
      type: { name: 'number' },
      defaultValue: '',
      control: 'number',
    },
    variant: {
      control: false,
    },
    onFocusVisible: {
      table: {
        category: 'Events',
      },
    },
    onClick: {
      description: 'Callback fired when the button is clicked.',
      action: 'clicked',
      table: {
        type: {
          summary: 'React.MouseEvent<HTMLButtonElement>',
        },
        category: 'Events',
      },
    },
  },
} as ComponentMeta<typeof MuiButton>;
