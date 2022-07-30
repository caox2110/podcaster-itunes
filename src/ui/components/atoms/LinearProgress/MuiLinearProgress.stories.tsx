import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { withVerticalCentered } from '../../../../../.storybook/preview';

import MuiLinearProgress from '.';

const Template: ComponentStory<typeof MuiLinearProgress> = (properties) => (
  <MuiLinearProgress {...properties} />
);

const LinearProgressComponent = Template.bind({});
LinearProgressComponent.args = {};

export { LinearProgressComponent };
export default {
  title: 'UI/Atoms/LinearProgress',
  component: MuiLinearProgress,
  decorators: [withVerticalCentered],
  argTypes: {
    value: {
      type: { name: 'number' },
      control: 'number',
    },
    valueBuffer: {
      type: { name: 'number' },
      control: 'number',
    },
  },
} as ComponentMeta<typeof MuiLinearProgress>;
