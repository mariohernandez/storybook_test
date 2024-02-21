export default {
  title: 'Components/Atoms/Chip',
  tags: ['autodocs'],
};

// Twig file.
import myChip from "./chip.twig";

// CSS file.
import './chip.css';

// JS file.
import './chip.js';

export const Chip = () => (
  //👇 Enables auto-generated documentation for the component story
  myChip({
    color: 'primary',
    dismissable: 'chip--dismissable',
    content: 'UCLA Health',
  })
);
