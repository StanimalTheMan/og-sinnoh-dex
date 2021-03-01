import React, { Component } from "react";
import axios from "axios";

import Pokemon from "../../components/Pokemon/Pokemon";
import PokedexEntry from "../../components/PokedexEntry/PokedexEntry";
import "./Pokedex.css"; // global styling atm

class Pokedex extends Component {
  state = {
    sinnohPokemon: [],
    showAllPokemon: true,
    showPokemonEntry: false,
    selectedPokemonId: null,
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
      <div>
        <h1>Diamond & Pearl Pokedex</h1>
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
    );
  }
}

export default Pokedex;
