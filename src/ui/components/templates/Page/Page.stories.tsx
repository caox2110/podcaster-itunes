import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import Page from '.';

const Template: ComponentStory<typeof Page> = (properties) => (
  <Page {...properties}>
    <h1>Testing Page</h1>
  </Page>
);

const PageWithTitle = Template.bind({});
PageWithTitle.args = {
  title: 'Main Page',
};

export { PageWithTitle };
export default {
  title: 'UI/Templates/Page',
  component: Page,
  decorators: [withPerformance],
} as ComponentMeta<typeof Page>;
