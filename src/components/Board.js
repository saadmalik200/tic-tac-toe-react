import React, { useState } from "react";
import Square from "./Square";
import { useContext } from "react";
import { Context } from "./Context";

function Board() {
  // const { state, dispatch } = useContext(Context);

  // console.log(state);

  const [player1, setPlayer1] = useState(true);
  const [player2, setPlayer2] = useState(false);

  const renderSquare = (i) => {
    // console.log(i);
    return (
      <Square
        player1={player1}
        setPlayer1={setPlayer1}
        player2={player2}
        setPlayer2={setPlayer2}
      />
    );
  };

  const status = player1 ? "Next player: X" : "Next player: O";

  return (
    <React.Fragment>
      <div className="status h2 text-center">{status}</div>
      <div className="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div>Start the Game</div>
    </React.Fragment>
  );
}

export default Board;
