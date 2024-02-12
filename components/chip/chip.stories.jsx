export default {
  title: 'Components/chip',
  tags: ['autodocs'],
};

// Twig file.
import myChip from "./chip.twig";

// CSS file.
import './chip.css';

// JS file.
// import './chip.js';

export const chip = () => (
  //👇 Enables auto-generated documentation for the component story
  myChip({
    color: 'primary',
    dismissable: true,
    content: 'Chaz',
  })
);
