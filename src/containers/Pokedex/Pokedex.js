import React, { Component } from "react";

import AllPokemon from "./AllPokemon/AllPokemon";
import PokedexEntry from "./PokedexEntry/PokedexEntry";
import "./Pokedex.css"; // global styling atm

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <header>
          <ul>
            <li>
              <a href="/">Sinnoh Pokedex</a>
            </li>
          </ul>
        </header>
        <AllPokemon />
      </div>
    );
  }
}

export default Pokedex;
