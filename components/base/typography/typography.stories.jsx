export default {
  title: 'Base/Typography',
  tags: ['autodocs'],
};

// Twig file.
import typo from "./typography.twig";


export const Typography = () => (
  typo({
    title: 'Color title',
    url: 'https://mariohernandez.io',
    modifier: 'button--primary',
  })
);
