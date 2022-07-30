const path = require('path');

const { loadConfigFromFile, mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/theming',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    'storybook-addon-pseudo-states',
    'storybook-addon-performance',
    'storybook-addon-react-router-v6',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: false,
    buildStoriesJson: true,
    babelModeV7: true,
    interactionsDebugger: true,
  },
  reactOptions: { legacyRootApi: true },
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent
          ? /@mui/.test(prop.parent.fileName) || !/node_modules/.test(prop.parent.fileName)
          : true,
    },
  },
  async viteFinal(config) {
    // return the customized config
    return mergeConfig(config, {
      resolve: {
        alias: { '@': path.resolve(__dirname, '../src') },
      },
    });
  },
};
