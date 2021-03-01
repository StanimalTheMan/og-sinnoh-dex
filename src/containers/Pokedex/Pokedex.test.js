import React from "react";
import { render, screen } from "@testing-library/react";
import Pokedex from "./Pokedex";

test("render h1 element", () => {
  render(<Pokedex />);
  expect(screen.getByText("Diamond & Pearl Pokedex")).toBeInTheDocument();
});
