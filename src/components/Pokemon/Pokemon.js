import React from "react";
import Figure from "react-bootstrap/Figure";

import "./Pokemon.css";

const pokemon = (props) => {
  return (
    // <div>
    //   <h3>{props.name}</h3>
    //   <img src={props.sprite} alt="sprite" onClick={props.clicked} />
    // </div>
    <Figure className="Pokemon">
      <Figure.Image src={props.sprite} alt="sprite" onClick={props.clicked} />
      <Figure.Caption>
        <h3 className="text-center">{props.name}</h3>
      </Figure.Caption>
    </Figure>
  );
};

export default pokemon;
