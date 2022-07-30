import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { withVerticalCentered } from '../../../../../.storybook/preview';

import CardActionAreaWithNavigation from '.';

const Template: ComponentStory<typeof CardActionAreaWithNavigation> = (properties) => (
  <CardActionAreaWithNavigation {...properties} />
);

const CardActionAreaWithNavigationComponent = Template.bind({});
CardActionAreaWithNavigationComponent.args = {
  children: <h1>Card Action</h1>,
  route: '/podcast/123456',
};

export { CardActionAreaWithNavigationComponent };
export default {
  title: 'UI/Molecules/CardActionAreaWithNavigation',
  component: CardActionAreaWithNavigation,
  decorators: [withVerticalCentered],
} as ComponentMeta<typeof CardActionAreaWithNavigation>;
