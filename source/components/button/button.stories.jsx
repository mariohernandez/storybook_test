import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators.jsx';
import button from './button.twig';
import buttonData from './button.yml';
import './button.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Button',
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
};

export const Button = {
  name: 'Button',
  render: () => parse(button(buttonData)),
  args: { ...buttonData },
};