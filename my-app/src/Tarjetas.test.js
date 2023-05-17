import { render, screen } from '@testing-library/react';
import Tarjetas from './Tarjetas';

test('renders learn react link', () => 
{
  render(<Tarjetas />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});