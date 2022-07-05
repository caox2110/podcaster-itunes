module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
    'babel-preset-vite',
  ],
  plugins: [
    '@emotion/babel-plugin',
    [
      'babel-plugin-import',
      {
        libraryName: '@mui/material',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'core',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@mui/icons-material',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'icons',
    ],
    ['babel-plugin-direct-import', { modules: ['@mui/material', '@mui/icons-material'] }],
  ],
};
