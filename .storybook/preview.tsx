import type { DecoratorFn, Story } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withRouter } from 'storybook-addon-react-router-v6';
import { withPerformance } from 'storybook-addon-performance';
import { ThemeContainer, VerticalCentered } from '../src/ui';

export const withVerticalCentered: DecoratorFn = (Story: Story) => (
  <VerticalCentered>
    <Story />
  </VerticalCentered>
);

export const decorators = [
  (Story: Story) => (
    <ThemeContainer>
      <Story />
    </ThemeContainer>
  ),
  withRouter,
  withPerformance,
];

export const parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'senary',
    values: [
      { name: 'primary', value: '#121c37' },
      { name: 'secondary', value: '#223a4a' },
      { name: 'tertiary', value: '#3b6464' },
      { name: 'quaternary', value: '#c4b181' },
      { name: 'quinary', value: '#e4dcca' },
      { name: 'senary', value: '#ffffff' },
      { name: 'dark', value: '#001133' },
    ],
  },
  viewport: {
    defaultViewport: 'responsive',
    viewports: {
      ...INITIAL_VIEWPORTS,
      responsive: {
        name: 'Responsive',
        styles: {
          width: '95%',
          height: '95%',
        },
      },
      xs: {
        name: 'Extra small (default)',
        styles: { width: '375px', height: '100%' },
      },
      sm: {
        name: 'Small (sm)',
        styles: { width: '600px', height: '100%' },
      },
      md: {
        name: 'Medium (md)',
        styles: { width: '900px', height: '100%' },
      },
      lg: { name: 'Large (lg)', styles: { width: '1200px', height: '100%' } },
      xl: { name: 'Extra Large (xl)', styles: { width: '1536px', height: '100%' } },
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
