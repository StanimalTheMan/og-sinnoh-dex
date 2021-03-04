import React, { Component } from "react";
import axios from "axios";

class PokedexEntry extends Component {
  state = {
    pokemonImg: null,
    pokemonFlavorText: null,
  };

  componentDidMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${this.props.id}/`)
      .then((response) => {
        console.log(response.data.flavor_text_entries);
        this.setState({
          pokemonImg: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.props.id}.png`,
          pokemonFlavorText:
            this.props.id === 388
              ? response.data.flavor_text_entries[5].flavor_text
              : response.data.flavor_text_entries[2].flavor_text,
        });
      });
  }

  render() {
    return (
      <div>
        <p>{this.props.id}</p>
        <img src={this.state.pokemonImg} alt="pokemonImg" />
        <p>{this.state.pokemonFlavorText}</p>
        <h3>Stats</h3>
        <p>
          <span style={{ fontWeight: "bold" }}>HP: </span>
          {this.props.stats[0]}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Attack: </span>
          {this.props.stats[1]}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Defense: </span>
          {this.props.stats[2]}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Sp. Atk: </span>
          {this.props.stats[3]}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Sp. Def: </span>
          {this.props.stats[4]}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Speed: </span>
          {this.props.stats[5]}
        </p>
      </div>
    );
  }
}

export default PokedexEntry;
