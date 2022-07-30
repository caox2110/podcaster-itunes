import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import PageDataContainer from '.';

const Template: ComponentStory<typeof PageDataContainer> = (properties) => (
  <PageDataContainer {...properties} />
);

const PageDataContainerLoading = Template.bind({});
PageDataContainerLoading.args = {
  children: <h1>Testing Text</h1>,
  isLoading: true,
  isError: false,
  error: 'Error fetching podcast-rss. Message: Internal Server Error.',
};

const PageDataContainerError = Template.bind({});
PageDataContainerError.args = {
  children: <h1>Testing Text</h1>,
  isError: true,
  isLoading: false,
  error: 'Error fetching podcast-rss. Message: Internal Server Error.',
};

const PageDataContainerNormal = Template.bind({});
PageDataContainerNormal.args = {
  children: <h1>Testing Text</h1>,
  isError: false,
  isLoading: false,
  error: 'Error fetching podcast-rss. Message: Internal Server Error.',
};

export { PageDataContainerLoading, PageDataContainerError, PageDataContainerNormal };
export default {
  title: 'UI/Templates/PageDataContainer',
  component: PageDataContainer,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPerformance],
} as ComponentMeta<typeof PageDataContainer>;
