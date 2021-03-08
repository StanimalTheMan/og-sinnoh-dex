import React, { Component } from "react";
import axios from "axios";

class PokedexEntry extends Component {
  state = {
    pokemonImg: null,
    pokemonFlavorText: null,
  };

  componentDidMount() {
    // console.log(this.props);
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
      });
  }

  render() {
    return (
      // <div>Hello</div>
      <div>
        <p>{this.props.id}</p>
        <img src={this.state.pokemonImg} alt="pokemonImg" />
        <ul>
          {this.props.location.types.map((type) => (
            <li key={type}>{type.type.name}</li>
          ))}
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
