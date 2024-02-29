import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Helvetica", sans-serif',
  fontCode: 'monospace',

  // Brand
  brandTitle: 'UCLA Health',
  brandUrl: 'https://medschool.ucla.edu/',
  brandImage: '../logo.svg',
  brandTarget: '_self',

  // Primary, Secondary colors
  colorPrimary: 'hsl(206 63% 42%)',
  colorSecondary: 'hsl(206 63% 42%)',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#ffffff',
  barHoverColor: '#ffffff',
  barBg: 'hsl(206 63% 42%)',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#ffffff',
  inputTextColor: '#ffffff',
  inputBorderRadius: 2,
});
