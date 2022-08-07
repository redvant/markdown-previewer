import { render, screen } from '@testing-library/react';
import App from './App';

test('preview displays links', () => {
  render(<App />);
  const linkElement = screen.getByText(/Link to Github/i);
  expect(linkElement).toBeInTheDocument();
});
