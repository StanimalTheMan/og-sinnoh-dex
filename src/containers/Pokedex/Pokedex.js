import React, { Component } from "react";

import "./Pokedex.css"; // global styling atm

class Pokedex extends Component {
  state = {
    sinnohPokemon: [],
  };

  render() {
    return <h1>Diamond & Pearl Pokedex</h1>;
  }
}

export default Pokedex;
