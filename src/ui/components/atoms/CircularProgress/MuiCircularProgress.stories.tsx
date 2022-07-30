import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { withVerticalCentered } from '../../../../../.storybook/preview';

import MuiCircularProgress from '.';

const Template: ComponentStory<typeof MuiCircularProgress> = (properties) => (
  <MuiCircularProgress {...properties} />
);

const CircularProgressComponent = Template.bind({});
CircularProgressComponent.args = {};

export { CircularProgressComponent };
export default {
  title: 'UI/Atoms/CircularProgress',
  component: MuiCircularProgress,
  decorators: [withVerticalCentered],
  argTypes: {
    disableShrink: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    size: {
      type: { name: 'number' },
      defaultValue: 40,
      control: 'number',
    },
    thickness: {
      type: { name: 'number' },
      defaultValue: 3.6,
      control: 'number',
    },
    value: {
      type: { name: 'number' },
      control: 'number',
    },
  },
} as ComponentMeta<typeof MuiCircularProgress>;
