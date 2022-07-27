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
  it('renders learn react link', () => {
    render(<App />, { wrapper: BrowserRouter });
    const linkElement = screen.getByText(/Weather/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('verifica se tem botão', () => {
    const { getByRole } = render(<App />, { wrapper: BrowserRouter });
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('botão desabilitado', () => {
    const { getByRole } = render(<App />, { wrapper: BrowserRouter });
    const button = getByRole('button');
    expect(button).toBeDisabled();
  });
  it('placeholder "digite o nome da cidade"', () => {
    const { getByPlaceholderText } = render(<App />, { wrapper: BrowserRouter });
    const placeholder = getByPlaceholderText(/digite o nome da cidade/i);
    expect(placeholder).toBeInTheDocument();
  });
});
