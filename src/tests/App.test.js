import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders math magicians', () => {
  render(<App />);
  const linkElement = screen.getByText(/Math Magicians/i);
  expect(linkElement).toBeInTheDocument();
});
