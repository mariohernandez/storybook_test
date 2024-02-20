/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  previewBody: (body) => `
    <script>
    window.Drupal = window.Drupal || {behaviors: {}};
    window.drupalSettings = Object.assign(window.drupalSettings || {}, {
      // Mock any drupalSettings your behaviors need here.
    });
    // Mock Drupal's once library too.
    window.once = (_, selector) => document.querySelectorAll(selector);
    document.addEventListener('DOMContentLoaded', () => {
      Object.entries(window.Drupal.behaviors).forEach(([key, object]) => object.attach(document));
    })
  </script>
  ${body}
  `
};
export default config;
