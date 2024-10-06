import { render, screen } from "@testing-library/react";
import Home from "../Home";
import React from "react";
import "@testing-library/jest-dom";

test("renders Home component", () => {
  const { asFragment } = render(<Home />);

  // Verifique se o título "Hello World!" está no documento
  const headingElement = screen.getByText(/umbigo/i);
  expect(headingElement).toBeInTheDocument();

  // Adicionando o teste de Snapshot
  expect(asFragment()).toMatchSnapshot();
});
