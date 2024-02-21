export default {
  title: 'Components/Atoms/Button',
  tags: ['autodocs'],
};

// Twig file.
import myButton from "./button.twig";

// CSS file.
import './button.css';

export const Button = () => (
  myButton({
    text: 'Learn more',
    url: 'https://mariohernandez.io',
    modifier: 'button--primary',
  })
);
