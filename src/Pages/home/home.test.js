import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import render from '../../setupTests';
import Home from './home';

const setup = () => render(<Home />);

describe('Error404 page', () => {

  it('Should display Home page', () => {
    setup('/');
    const main = screen.getByRole('main');
    expect(main).toHaveTextContent('Bienvenue sur WealthHealth');
  });
});
