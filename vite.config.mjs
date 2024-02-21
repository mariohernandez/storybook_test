import { defineConfig } from "vite";
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  root: 'src',
  publicDir: 'public',
  build: {
    emptyOutDir: true,
    brotliSize: false,
    outDir: "../dist/assets",
    rollupOptions: {
      input: {
        "global": "./src/css/global.css",
        "card": "./components/card/card.css",
        "chip": "./components/chip/chip.css",
        "button": "./components/button/button.css",
        "header": "./components/header/header.css",
        "image": "./components/image/image.css",
        "link": "./components/link/link.css",
        "page": "./components/page/page.css",
      },
      output: {
        assetFileNames: "[name].css",
      },
    },
    sourcemap: true,
    manifest: false,
  },
  plugins: [
    twig({
      namespaces: {
        components: join(__dirname, "../components"),
      },
    }),
    ViteImageOptimizer({
      png: {quality: 60},
      jpeg: {quality: 60},
      jpg: {quality: 60},
      tiff: {quality: 60},
      gif: {},
      webp: {lossless: true},
      avif: {lossless: true},
      includePublic: true,
      logStats: true,
      include: undefined,
    }),
  ],
})
