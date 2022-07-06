import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: create({
    base: 'light',

    // UI
    appBg: '#0011330d',
    appBorderColor: '#00113326',
    appBorderRadius: 6,
    // Brand
    brandTitle: '🎧 Podcaster',
    brandUrl: 'https://www.podcaster.test/',
  }),
});
