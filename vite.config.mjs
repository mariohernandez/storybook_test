import { defineConfig } from "vite";
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  root: 'src',
  build: {
    emptyOutDir: true,
    brotliSize: false,
    outDir: "../dist/assets",
    rollupOptions: {
      input: {
        "card": "./components/card/card.css",
        "chip": "./components/chip/chip.css",
        "button": "./components/button/button.css",
        "header": "./components/header/header.css",
        "image": "./components/image/image.css",
        "link": "./components/link/link.css",
        "page": "./components/page/page.css",
        "chip_js": "./components/chip/chip.js",
      },
      output: {
        assetFileNames: "[name].css",
      },
    },
    sourcemap: true,
    manifest: false
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
