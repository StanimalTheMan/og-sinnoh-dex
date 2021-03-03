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

  handlePokemonEntryClick = (id) => {
    console.log(id);
    this.setState({
      selectedPokemonId: id,
      showAllPokemon: false,
    });
    console.log(this.state.selectedPokemonId);
  };

  render() {
    let toShow = null;
    if (this.state.showAllPokemon) {
      toShow = this.state.sinnohPokemon.map((pokemon) => {
        return (
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            sprite={pokemon.sprites.front_default}
            clicked={() => this.handlePokemonEntryClick(pokemon.id)}
          />
        );
      });
    } else {
      toShow = <PokedexEntry id={this.state.selectedPokemonId} />;
    }
    return (
      <div>
        <h1>Sinnoh Pokedex</h1>
        <p>{this.state.showAllPokemon}</p>
        {toShow}
      </div>
    );
  }
}

export default Pokedex;
