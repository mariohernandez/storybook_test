export default {
  title: 'Components/chip',
};

// Twig file.
import myChip from "./chip.twig";

// CSS file.
import './chip.css';

// JS file.
// import './chip.js';

export const chip = () => (
  myChip({
    color: 'primary',
    dismissable: true,
    content: 'Article',
  })
);
