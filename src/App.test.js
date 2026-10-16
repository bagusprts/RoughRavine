// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RoughRavine title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RoughRavine/i);
    expect(titleElement).toBeInTheDocument();
});
