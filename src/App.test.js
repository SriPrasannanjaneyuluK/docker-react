import { render, screen } from '@testing-library/react';
import App from './App';

test('renders surprise homepage', () => {
  render(<App />);

  expect(screen.getByText(/Made with love, just for you/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1, name: /Surprise,/i })).toBeInTheDocument();
  expect(screen.getAllByText(/Bangaram/i).length).toBeGreaterThan(0);
  expect(
    screen.getByRole('button', { name: /open your surprise/i })
  ).toBeInTheDocument();
});
