import parse from 'html-react-parser';

import button from './button.twig';
import buttonData from './button.yml';
import './button.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Button',
  tags: ['autodocs'],
};

export const Button = {
  name: 'Button',
  render: () => parse(button(buttonData)),
  args: { ...buttonData },
};
