export default {
  title: 'Components/Image',
  tags: ['autodocs'],
};

// Twig file.
import myImage from "./image.twig";

// CSS file.
import './image.css';

export const Image = () => (
  //👇 Enables auto-generated documentation for the component story
  myImage({
    src: 'https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?q=80&w=3400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"',
    alt: 'Image placeholder text',
    height: '500',
    width: '500'
  })
);
