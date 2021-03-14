import React, { Component } from "react";
// import { BrowserRouter } from "react-router-dom"; // attempt at seo issue w/ github pages
import { HashRouter } from "react-router-dom";

import Pokedex from "./containers/Pokedex/Pokedex";

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/pokedex">
      //   <Pokedex />
      // </BrowserRouter>
      <HashRouter basename="/pokedex">
        <Pokedex />
      </HashRouter>
    );
  }
}

export default App;
