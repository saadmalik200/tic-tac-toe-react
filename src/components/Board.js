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
        ))}
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">{renderSquare(0)}</div>
      <div className="status h2 text-center">{status}</div>
    </React.Fragment>
  );
}

export default Board;
