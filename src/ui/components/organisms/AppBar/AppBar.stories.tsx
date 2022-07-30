import type { ComponentStory, ComponentMeta } from '@storybook/react';

import AppBar from '.';

const Template: ComponentStory<typeof AppBar> = (properties) => <AppBar {...properties} />;

const AppBarStory = Template.bind({});
AppBarStory.args = {
  appName: 'Podcaster',
};

export { AppBarStory };
export default {
  title: 'UI/Organisms/AppBar',
  component: AppBar,
  parameters: {
    layout: 'fullscreen',
    routePath: '/podcast/:id',
    routeParams: { id: '1633466636' },
  },
} as ComponentMeta<typeof AppBar>;
