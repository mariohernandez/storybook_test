export default {
  title: 'Components/Card',
  tags: ['autodocs'],
};

// Twig file.
import contentCard from "./card.twig";

// CSS file.
import './card.css';

export const Card = () => (
  contentCard({
    title: {
      text: 'Blog article title',
      level: 2,
      modifier: '',
      url: 'https://mariohernandez.io',
    },
    image: '<img src="https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?q=80&w=3400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Alt text" />',
    modifier: '',
    teaser: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis.'
  })
);
