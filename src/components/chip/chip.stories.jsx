import twigTemplate from './chip.twig';
import data from './chip.yml';
import './chip.css';
import './chip.js';

export default {
  title: 'Components/Chip',
  tags: ['autodocs'],
};

export const Chip = {
  name: 'Chip',
  render: (args) => twigTemplate({ ...data, ...args }),
};
