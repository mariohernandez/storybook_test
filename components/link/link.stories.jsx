export default {
  title: 'Components/Link',
  tags: ['autodocs'],
};

// Twig file.
import myLink from "./link.twig";

// CSS file.
import './link.css';

// JS file.
// import './chip.js';

export const Red = () => (
  myLink({
    text: 'My custom link',
    url: 'https://mariohernandez.io',
    modifier: 'red',
  })
);

export const Purple = () => (
  myLink({
    text: 'My custom link',
    url: 'https://mariohernandez.io',
    modifier: 'purple',
  })
);

export const Black = () => (
  myLink({
    text: 'My custom link',
    url: 'https://mariohernandez.io',
    modifier: 'black',
  })
);
