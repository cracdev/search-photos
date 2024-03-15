import path from 'node:path';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      $lib: path.resolve(__dirname, './src/lib'),
      $constants: path.resolve(__dirname, './src/constants'),
      $components: path.resolve(__dirname, './src/components'),
      $services: path.resolve(__dirname, './src/services'),
    },
  },
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   css: true,
  //   setupFiles: './src/test/setup.ts',
  //   coverage: {
  //     provider: 'istanbul',
  //     statements: 50,
  //   },
  // },
});
