export default {
  title: 'Components/Title',
  tags: ['autodocs'],
};

// Twig file.
import myTitle from "./title.twig";


export const PlainTitle = () => (
  myTitle({
    level: 1,
    modifier: 'page__title',
    text: 'Welcome to my website',
    url: '',
  })
);

export const LinkedTitle = () => (
  myTitle({
    level: 1,
    modifier: 'page__title',
    text: 'Welcome to my website',
    url: 'https://mariohernandez',
  })
);
