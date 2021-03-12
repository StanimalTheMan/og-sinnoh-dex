import React, { Component } from "react";
import axios from "axios";

import "./PokedexEntry.css";

// names of pokemon that have to be handled specially to get data
// wormadam, giratina, shaymin
const specialPokemon = [
  "/wormadam-plant",
  "/giratina-altered",
  "/shaymin-land",
];

class PokedexEntry extends Component {
  state = {
    pokemonImg: null,
    pokemonFlavorText: null,
    stats: [],
    types: [],
    id: null,
    error: false,
  };

  componentDidMount() {
    console.log("componentDidMount");
    if (this.props.location.id) {
      console.log(this.props);
      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon-species/${this.props.location.id}/`
        )
        .then((response) => {
          // console.log(response.data.flavor_text_entries);
          this.setState({
            pokemonImg: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.props.location.id}.png`,
            pokemonFlavorText:
              this.props.location.id === 388
                ? response.data.flavor_text_entries[5].flavor_text
                : response.data.flavor_text_entries[2].flavor_text,
            // redundant setState if come from home page so temporary inefficient solution for now
            // stats: this.props.location.stats,
            // types: this.props.location.types,
            // id: this.props.id,
          });
        })
        .catch((err) =>
          this.setState({
            error: true,
          })
        );
    } else {
      // console.log(this.props);
      console.log(specialPokemon.includes(this.props.location.pathname));
      // helper functions for axios
      const getGeneralPokemonData = () => {
        return axios.get(
          `https://pokeapi.co/api/v2/pokemon${this.props.location.pathname}`
        );
      };

      const getAdditionalPokemonData = () => {
        return axios.get(
          specialPokemon.includes(this.props.location.pathname)
            ? `https://pokeapi.co/api/v2/pokemon-species${
                this.props.location.pathname.split("-")[0]
              }/`
            : `https://pokeapi.co/api/v2/pokemon-species${this.props.location.pathname}`
        );
      };
      Promise.all([getGeneralPokemonData(), getAdditionalPokemonData()]).then(
        (results) => {
          console.log(results);
          this.setState({
            id: results[0].data.id,
            stats: results[0].data.stats,
            types: results[0].data.types,
            pokemonImg: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${results[0].data.id}.png`, // assume user doesn't manually input pokemon id in url
            pokemonFlavorText:
              this.props.location.id === 388
                ? results[1].data.flavor_text_entries[5].flavor_text
                : results[1].data.flavor_text_entries[2].flavor_text,
          });
          console.log(this.state);
        }
      );
    }
  }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  render() {
    const typeStyles = {
      width: "160px",
      height: "80px",
      lineHeight: "80px",
      background: "#a84909",
      borderRadius: "50%",
    };
    let toRender = null;
    if (this.state.id && this.state.stats && this.state.types) {
      toRender = (
        <React.Fragment>
          <img src={this.state.pokemonImg} alt="pokemonImg" />
          <ul>
            {this.state.types.map((type) => {
              let typeColor = null;
              switch (type.type.name) {
                case "grass":
                  typeColor = "#78C850";
                  break;
                case "water":
                  typeColor = "#6890F0";
                  break;
                case "fire":
                  typeColor = "#F08030";
                  break;
                case "electric":
                  typeColor = "#F8D030";
                  break;
                case "flying":
                  typeColor = "#A890F0";
                  break;
                case "poison":
                  typeColor = "#A040A0";
                  break;
                case "ground":
                  typeColor = "#E0C068";
                  break;
                case "rock":
                  typeColor = "#B8A038";
                  break;
                case "bug":
                  typeColor = "#A8B820";
                  break;
                case "ghost":
                  typeColor = "#705898";
                  break;
                case "psychic":
                  typeColor = "#F85888";
                  break;
                case "ice":
                  typeColor = "#98D8D8";
                  break;
                case "dragon":
                  typeColor = "#7038F8";
                  break;
                case "dark":
                  typeColor = "#705848";
                  break;
                case "fairy":
                  typeColor = "#EE99AC";
                  break;
                case "fighting":
                  typeColor = "#C03028";
                  break;
                case "steel":
                  typeColor = "#B8B8D0";
                  break;
                default:
                  typeColor = "#A8A878"; // default is normal type
              }
              return (
                <li key={type} style={{ ...typeStyles, background: typeColor }}>
                  {type.type.name}
                </li>
              );
            })}
          </ul>
          <p>{this.state.pokemonFlavorText}</p>
          <h3>Stats</h3>
          <p>
            <span style={{ fontWeight: "bold" }}>HP: </span>
            {this.state.stats[0].base_stat}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Attack: </span>
            {this.state.stats[1].base_stat}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Defense: </span>
            {this.state.stats[2].base_stat}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Sp. Atk: </span>
            {this.state.stats[3].base_stat}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Sp. Def: </span>
            {this.state.stats[4].base_stat}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Speed: </span>
            {this.state.stats[5].base_stat}
          </p>
        </React.Fragment>
      );
    } else if (
      this.props.location.id &&
      this.props.location.types &&
      this.props.location.stats
    ) {
      toRender = (
        <React.Fragment>
          <p>{this.props.id}</p>
          <img src={this.state.pokemonImg} alt="pokemonImg" />
          <ul>
            {this.props.location.types.map((type) => {
              let typeColor = null;
              switch (type.type.name) {
                case "grass":
                  typeColor = "#78C850";
                  break;
                case "water":
                  typeColor = "#6890F0";
                  break;
                case "fire":
                  typeColor = "#F08030";
                  break;
                case "electric":
                  typeColor = "#F8D030";
                  break;
                case "flying":
                  typeColor = "#A890F0";
                  break;
                case "poison":
                  typeColor = "#A040A0";
                  break;
                case "ground":
                  typeColor = "#E0C068";
                  break;
                case "rock":
                  typeColor = "#B8A038";
                  break;
                case "bug":
                  typeColor = "#A8B820";
                  break;
                case "ghost":
                  typeColor = "#705898";
                  break;
                case "psychic":
                  typeColor = "#F85888";
                  break;
                case "ice":
                  typeColor = "#98D8D8";
                  break;
                case "dragon":
                  typeColor = "#7038F8";
                  break;
                case "dark":
                  typeColor = "#705848";
                  break;
                case "fairy":
                  typeColor = "#EE99AC";
                  break;
                case "fighting":
                  typeColor = "#C03028";
                  break;
                case "steel":
                  typeColor = "#B8B8D0";
                  break;
                default:
                  typeColor = "#A8A878"; // default is normal type
              }
              return (
                <li key={type} style={{ ...typeStyles, background: typeColor }}>
                  {type.type.name}
                </li>
              );
            })}
          </ul>
          <p>{this.state.pokemonFlavorText}</p>
          <h3>Stats</h3>
          <p>
            <span style={{ fontWeight: "bold" }}>HP: </span>
            {this.props.location.stats[0].base_stat}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Attack: </span>
            {this.props.location.stats[1].base_stat}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Defense: </span>
            {this.props.location.stats[2].base_stat}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Sp. Atk: </span>
            {this.props.location.stats[3].base_stat}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Sp. Def: </span>
            {this.props.location.stats[4].base_stat}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Speed: </span>
            {this.props.location.stats[5].base_stat}
          </p>
        </React.Fragment>
      );
    }
    return <div className="PokedexEntry">{toRender}</div>;
  }
}

export default PokedexEntry;
