import { resolve } from 'node:path';

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginReactRemoveAttributes from 'vite-plugin-react-remove-attributes';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [
      react(),
      VitePluginReactRemoveAttributes({
        attributes: ['data-testid'],
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@storybook-config': resolve(__dirname, './storybook'),
      },
    },
    define: { 'process.env': { ...loadEnv(mode, process.cwd()) } },
    build: {
      outDir: './dist/app',
    },
    preview: {
      port: 8080,
    },
  });
};
