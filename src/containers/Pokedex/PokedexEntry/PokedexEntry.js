import React, { Component } from "react";
import axios from "axios";

import "./PokedexEntry.css";

class PokedexEntry extends Component {
  state = {
    pokemonImg: null,
    pokemonFlavorText: null,
    error: false,
  };

  componentDidMount() {
    // console.log(this.props);
    console.log("componentDidMount");
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon-species/${this.props.match.params.pokemon}/`
      )
      .then((response) => {
        // console.log(response.data.flavor_text_entries);
        this.setState({
          pokemonImg: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.props.location.id}.png`,
          pokemonFlavorText:
            this.props.location.id === 388
              ? response.data.flavor_text_entries[5].flavor_text
              : response.data.flavor_text_entries[2].flavor_text,
        });
      })
      .catch((err) =>
        this.setState({
          error: true,
        })
      );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    let typeStyles = {
      width: "160px",
      height: "80px",
      lineHeight: "80px",
      background: "#a84909",
      borderRadius: "50%",
    };
    return (
      <div className="PokedexEntry">
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
      </div>
    );
  }
}

export default PokedexEntry;
