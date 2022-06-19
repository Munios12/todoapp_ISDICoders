import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('renders learn react link', () => {
  const expectedTitle = 'Learning React';
  render(<Header appTitle={expectedTitle} />);

  const linkElement = screen.getByText(/Learning React/i);
  expect(linkElement).toBeInTheDocument();
});
