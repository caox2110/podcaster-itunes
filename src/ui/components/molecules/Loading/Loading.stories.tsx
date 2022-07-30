import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { withVerticalCentered } from '../../../../../.storybook/preview';

import Loading, { LoadingTypeEnum } from '.';

const Template: ComponentStory<typeof Loading> = (properties) => <Loading {...properties} />;

const LoadingLinearProgress = Template.bind({});
LoadingLinearProgress.args = {};

const LoadingCircularProgress = Template.bind({});
LoadingLinearProgress.args = { type: LoadingTypeEnum.circular };

export { LoadingLinearProgress, LoadingCircularProgress };
export default {
  title: 'UI/Molecules/Loading',
  component: Loading,
  decorators: [withVerticalCentered],
  argTypes: {
    type: {
      control: false,
    },
  },
} as ComponentMeta<typeof Loading>;
