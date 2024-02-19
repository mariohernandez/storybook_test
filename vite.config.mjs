import { defineConfig } from "vite";
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [
    twig({
      namespaces: {
        components: join(__dirname, "../components"),
      },
    }),
    ViteImageOptimizer({
      png: {quality: 80},
      jpeg: {quality: 80},
      jpg: {quality: 80},
      tiff: {quality: 80},
      gif: {},
      webp: {lossless: true},
      avif: {lossless: true},
      includePublic: true,
      logStats: true,
      include: undefined,
    }),
  ],
})
