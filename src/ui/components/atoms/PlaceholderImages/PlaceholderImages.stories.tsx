import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { withVerticalCentered } from '../../../../../.storybook/preview';

import PlaceholderImages from '.';

const Template: ComponentStory<typeof PlaceholderImages> = (properties) => (
  <PlaceholderImages
    {...properties}
    style={{ width: 200, height: 200, top: 100, left: 100, borderRadius: 5 }}
  />
);

const PlaceholderImagesItem = Template.bind({});
PlaceholderImagesItem.args = {};

export { PlaceholderImagesItem };
export default {
  title: 'UI/Atoms/PlaceholderImages',
  component: PlaceholderImages,
  decorators: [withVerticalCentered],
} as ComponentMeta<typeof PlaceholderImages>;
