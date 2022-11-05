import React, { useContext, useId, useState } from "react";

const Square = (props) => {
  const [x, setX] = useState("");
  const [o, setO] = useState("");
  const id = useId();

  const handleClick = () => {
    // props.player1 ? setX("X") : setO("O");
    props.player1 && setX("X");
    props.player2 && setO("O");
    console.log(x);

    props.setPlayer1(!props.player1);
    props.setPlayer2(!props.player2);
  };

  return (
    <button
      // id={id}
      onClick={handleClick}
      className="square"
    >
      {/* {(props.player1 && x) || (props.player2 && o)} */}
      {/* {props.player2 && o} */}
      {props.player1 ? x : o}
      {props.player2 ? x : o}
    </button>
  );
};

export default Square;
