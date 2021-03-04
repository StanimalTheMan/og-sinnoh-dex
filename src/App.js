import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Pokedex from "./containers/Pokedex/Pokedex";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/pokedex">
        <Pokedex />
      </BrowserRouter>
    );
  }
}

export default App;
