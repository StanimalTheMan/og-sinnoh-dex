import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Pokemon from "../../../components/Pokemon/Pokemon";
import "./AllPokemon.css";

class AllPokemon extends Component {
  state = {
    sinnohPokemon: [],
  };

  componentDidMount() {
    if (localStorage.getItem("sinnohPokemon") === null) {
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

      Promise.all(promises).then(() => {
        // localStorage.setItem("sinnohPokemon", sinnohPokemon);
        this.setState({ sinnohPokemon });
      });
    } else {
      this.setState({
        sinnohPokemon: JSON.parse(localStorage.getItem("sinnohPokemon")),
      });
    }
  }

  //   handlePokemonEntryClick = (id, stats) => {
  //     console.log(id);
  //     console.log(stats);
  //     this.setState({
  //       selectedPokemonId: id,
  //       selectedPokemonStats: stats.map((stat) => stat.base_stat),
  //       showAllPokemon: false,
  //     });
  //     console.log(this.state.selectedPokemonId);
  //   };

  render() {
    return (
      <div className="AllPokemon">
        <h1>Sinnoh Pokedex</h1>
        <div>
          {this.state.sinnohPokemon.map((pokemon) => {
            return (
              <Link
                to={{
                  pathname: pokemon.name,
                  stats: pokemon.stats,
                  types: pokemon.types,
                  id: pokemon.id,
                }}
                key={pokemon.id}
              >
                <Pokemon
                  name={pokemon.name}
                  sprite={pokemon.sprites.front_default}
                  types={pokemon.types}
                  //   clicked={() =>
                  //     this.handlePokemonEntryClick(pokemon.id, pokemon.stats)
                  //   }
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllPokemon;
