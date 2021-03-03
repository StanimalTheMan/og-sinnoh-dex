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
        this.setState({
          pokemonImg: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.props.id}.png`,
          pokemonFlavorText: response.data.flavor_text_entries[2].flavor_text,
        });
      });
  }

  render() {
    return (
      <div>
        <p>{this.props.id}</p>
        <img src={this.state.pokemonImg} alt="pokemonImg" />
        <p>{this.state.pokemonFlavorText}</p>
      </div>
    );
  }
}

export default PokedexEntry;
