import React from "react";

const pokemon = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.sprite} alt="sprite" onClick={props.clicked} />
    </div>
  );
};

export default pokemon;
