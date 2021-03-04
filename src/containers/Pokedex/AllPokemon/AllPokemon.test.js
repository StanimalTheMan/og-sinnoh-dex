import React from "react";
import { render, screen } from "@testing-library/react";
import AllPokemon from "./AllPokemon";

test("render h1 element", () => {
  render(<AllPokemon />);
  expect(screen.getByText("Sinnoh Pokedex")).toBeInTheDocument();
});
