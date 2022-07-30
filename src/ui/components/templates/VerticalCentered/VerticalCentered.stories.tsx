import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import VerticalCentered from '.';

const Template: ComponentStory<typeof VerticalCentered> = (properties) => (
  <VerticalCentered {...properties} />
);

const VerticalCenteredWithTitle = Template.bind({});
VerticalCenteredWithTitle.args = {
  children: <h1>Testing Text Centered</h1>,
};

export { VerticalCenteredWithTitle };
export default {
  title: 'UI/Templates/VerticalCentered',
  component: VerticalCentered,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPerformance],
} as ComponentMeta<typeof VerticalCentered>;
