import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import render from '../setupTests';
import NotFound from '../Pages/Error/Page404';

const setup = () => render(<NotFound />);

describe('Error404 page', () => {
  setup();
  const main = screen.getByRole('main');

  it('Should contain Error 404 and Page Not Found', () => {
    expect(main).toHaveTextContent('Quelque chose ne va pas ici!');
  });
});
