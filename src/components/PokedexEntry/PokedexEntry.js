import React, { Component } from "react";
import axios from "axios";

class PokedexEntry extends Component {
  state = {
    pokemonImg: null,
  };

  componentDidMount() {
    this.setState({
      pokemonImg: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.props.id}.png`,
    });
  }

  render() {
    return (
      <div>
        <p>{this.props.id}</p>
        <img src={this.state.pokemonImg} alt="pokemonImg" />
      </div>
    );
  }
}

export default PokedexEntry;
