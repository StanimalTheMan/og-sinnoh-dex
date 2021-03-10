import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

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
              <a href="/pokedex">Sinnoh Pokedex</a>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/" exact component={AllPokemon} />
          <Route path="/:pokemon" component={PokedexEntry} />
        </Switch>
      </div>
    );
  }
}

export default Pokedex;
