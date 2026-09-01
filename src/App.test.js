// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoNodeMax title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoNodeMax/i);
    expect(titleElement).toBeInTheDocument();
});
