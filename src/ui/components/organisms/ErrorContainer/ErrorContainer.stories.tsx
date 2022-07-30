import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import ErrorContainer from '.';

const Template: ComponentStory<typeof ErrorContainer> = (properties) => (
  <ErrorContainer {...properties} />
);

const ErrorContainerWithMessage = Template.bind({});
ErrorContainerWithMessage.args = {
  error: 'Error fetching podcast-rss. Message: Internal Server Error.',
};

export { ErrorContainerWithMessage };
export default {
  title: 'UI/Organisms/ErrorContainer',
  component: ErrorContainer,
  decorators: [withPerformance],
  argTypes: {
    error: {
      description: 'Error message to show in the component.',
      type: { name: 'string' },
      defaultValue: '',
      control: 'text',
    },
  },
} as ComponentMeta<typeof ErrorContainer>;
