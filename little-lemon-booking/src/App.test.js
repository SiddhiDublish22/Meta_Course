import { render, screen } from '@testing-library/react';
import App from './App';

test('renders booking form heading', () => {
  render(<App />);
  const heading = screen.getByText(/Reserve a Table/i);
  expect(heading).toBeInTheDocument();
});
