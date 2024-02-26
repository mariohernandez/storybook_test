import { defineConfig } from 'vite';
import twig from 'vite-plugin-twig-drupal';
import yml from '@modyfi/vite-plugin-yaml';
import { join } from 'node:path';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    checker({
      eslint: {
        lintCommand: 'eslint "./components/**/*.{js,jsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint "./components/**/*.css"',
      },
    }),
    twig({
      namespaces: {
        components: join(__dirname, '../components'),
      },
    }),
    yml(),
  ],
  build: {
    rollupOptions: {
      input: {
        global: './components/base/global.css',
        utilties: './components/base/utilities.css',
      },
      output: {
        assetFileNames: '[name].css',
      },
    },
    sourcemap: true,
    manifest: false,
  },
  css: {
    devSourcemap: true,
  },
});
