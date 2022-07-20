import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  BrowserRouter,
  // MemoryRouter,
} from 'react-router-dom';
import {
  App,
  // LocationDisplay,
} from '../App';
// import renderWithRouter from '../renderWithRouter';

describe('teste', () => {
  test('renders learn react link', () => {
    render(<App />, { wrapper: BrowserRouter });
    const linkElement = screen.getByText(/Weather/i);
    expect(linkElement).toBeInTheDocument();
  });
});
