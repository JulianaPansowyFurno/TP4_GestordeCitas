import { render, screen } from '@testing-library/react';
import Citas from './Citas';

test('renders learn react link', () => 
{
  render(<Citas />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
