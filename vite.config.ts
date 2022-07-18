import { resolve } from 'node:path';

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    define: { 'process.env': { ...loadEnv(mode, process.cwd()) } },
    build: {
      outDir: './dist/app',
    },
  });
};
