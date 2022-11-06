import React, { useState } from "react";
import Square from "./Square";
import { useContext } from "react";
import { Context } from "./Context";

function Board() {
  const { state, dispatch } = useContext(Context);

  console.log(state);

  const renderSquare = (i) => {
    return (
      <div
        className=" d-flex flex-wrap justify-content-center align-items-center"
        style={{ width: "45rem", height: "45rem" }}
      >
        {Object.keys(state.boardSquares).map((key) => (
          <div key={key}>
            <Square id={key} />
          </div>
          // <div
          //   className="square"
          //   key={key}
          //   onClick={() => {
          //     if (state.boardSquares[key] === null) {
          //       dispatch({ type: "PLAYER_MOVE", squareNumber: key });
          //     }
          //   }}
          // >
          //   {state.boardSquares[key]}
          //   {state.boardSquares[key] === null && (state.playerX ? "X" : "O")}
          // </div>
        ))}
      </div>
    );

    // <Square value="X" />
  };
  const status = state.playerX ? "Next player: X" : "Next player: O";

  return (
    <React.Fragment>
      <div className="status h2 text-center">{status}</div>
      <div className="board">
        {renderSquare(0)}
        {/* {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)} */}
      </div>
      <div>Start the Game</div>
    </React.Fragment>
  );
}

export default Board;
