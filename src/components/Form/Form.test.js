import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import render from '../../setupTests';
import Create from './Form';


const setup = () => render(<Create />);

describe('Create page form', () => {

  it('Should be valid when all field is valid and create an employee', () => {
    setup();

    const textbox = screen.getAllByRole('textbox');
    textbox.forEach((input) => {
      fireEvent.change(input, { target: { value: 'abcdef' } });
      expect(input).toBeValid();
    });

    const birthDate = screen.getByLabelText('Date of Birth');
    fireEvent.change(birthDate, { target: { value: '1997-02-12' } });
    expect(birthDate).toBeValid();

    const startDate = screen.getByLabelText('Start Date');
    fireEvent.change(startDate, { target: { value: '2022-08-20' } });
    expect(startDate).toBeValid();

    const zipCode = screen.getByRole('spinbutton');
    fireEvent.change(zipCode, { target: { value: '35' } });
    expect(zipCode).toBeValid();
  });
});
