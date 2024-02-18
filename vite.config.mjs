import { defineConfig } from "vite";
import twig from 'vite-plugin-twig-drupal';
import yml from '@modyfi/vite-plugin-yaml';
import { join } from "node:path"
import copy from "rollup-plugin-copy";

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [
    twig({
      namespaces: {
        components: join(__dirname, "../src/components"),
      },
    }),
    yml(),
    copy({
      targets: [{ src: 'src/**/**.css', dest: 'dist/css' }],
      hook: 'writeBundle',
    }),
  ],
  css: {
    src: 'src/**/**',
    postcss: {
      config: './postcss.config.js'
    }
  }
})
