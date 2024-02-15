import { defineConfig } from "vite"
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path"
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
  ],
})
