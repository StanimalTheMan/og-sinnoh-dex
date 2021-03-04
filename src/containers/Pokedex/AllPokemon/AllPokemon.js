import React, { Component } from "react";
import axios from "axios";

import Pokemon from "../../../components/Pokemon/Pokemon";
import "./AllPokemon.css";

class AllPokemon extends Component {
  state = {
    sinnohPokemon: [],
  };
  componentDidMount() {
    const sinnohPokemon = [];
    const promises = [];
    for (let pokedexNum = 387; pokedexNum <= 493; pokedexNum++) {
      promises.push(
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokedexNum}/`)
          .then((response) => {
            sinnohPokemon.push(response.data);
          })
      );
    }

    Promise.all(promises).then(() => this.setState({ sinnohPokemon }));
  }

  render() {
    return (
      <div className="AllPokemon">
        <h1>Sinnoh Pokedex</h1>
        <div>
          {this.state.sinnohPokemon.map((pokemon) => {
            return (
              <Pokemon
                key={pokemon.id}
                name={pokemon.name}
                sprite={pokemon.sprites.front_default}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllPokemon;
