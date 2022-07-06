import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import PageExample from './PageExample';

const Template: ComponentStory<typeof PageExample> = () => <PageExample />;

const LoggedOut = Template.bind({});

const LoggedIn = Template.bind({});

// More on interaction testing:
// https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = canvas.getByRole('button', { name: /log in/i });
  await userEvent.click(loginButton);
};

export { LoggedOut, LoggedIn };
export default {
  title: 'Example/PageExample',
  component: PageExample,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageExample>;
