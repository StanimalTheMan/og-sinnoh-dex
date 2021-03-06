import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import AllPokemon from "./AllPokemon/AllPokemon";
import PokedexEntry from "./PokedexEntry/PokedexEntry";
import pokeball from "../../assets/pokeball.png";
import "./Pokedex.css"; // global styling atm

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <header>
          <Link to="/">
            <img src={pokeball} alt="pokeball" width="50" height="50"></img>
          </Link>
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
