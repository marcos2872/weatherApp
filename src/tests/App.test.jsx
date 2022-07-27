import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../App';

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
  it('teste se o botão contém o texto.', () => {
    render(<App />, { wrapper: BrowserRouter });
    const textButton = screen.getByRole('button');
    expect(textButton).toHaveTextContent(/°C/i);
    expect(textButton).toBeInTheDocument();
  });
});
