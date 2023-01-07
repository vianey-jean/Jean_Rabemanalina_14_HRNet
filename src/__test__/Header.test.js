import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import render from '../setupTests';
import Header from '../components/Header/Header';

const setup = () => render(<Header />);

describe('Header', () => {
  setup();
  const img = screen.getByRole('img');
  const title = screen.getByRole('banner');

  it('Should have HRNet logo', () => {
    expect(img).toHaveAttribute('src', 'logo.png');
  });
  it('Should display HRNet', () => {
    expect(title).toHaveTextContent('HRnet');
  });
});
