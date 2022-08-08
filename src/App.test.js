import { render, screen } from '@testing-library/react';
import App from './App';

test('title display', () => {
  render(<App />);
  const titleElement = screen.getByText(/Markdown Previewer/);
  expect(titleElement).toBeInTheDocument();
});
