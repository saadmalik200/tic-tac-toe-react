import React, { useContext, useId, useState } from "react";

import { Context } from "./Context";
const Square = (props) => {
  const { state, dispatch } = useContext(Context);

  // {Object.keys(state.boardSquares).map(key => (
  //     <div

  //       key={key}
  //       onClick={() => {
  //         if (state.boardSquares[key] === null) {
  //           dispatch({ type: "playerMove", squareNumber: key });
  //         }
  //       }}

  return (
    <div className="">
      {/* <div className="boardWrapper"> */}
      {/* {Object.keys(state.boardSquares).map((key) => (
        <div
          className="square"
          key={key}
          onClick={() => {
            if (state.boardSquares[key] === null) {
              dispatch({ type: "PLAYER_MOVE", squareNumber: key });
            }
          }}
        >
          {state.boardSquares[key]}
          {state.boardSquares[key] === null && (state.playerX ? "X" : "O")}
        </div>
      ))} */}
      {/* </div> */}
      <div
        className=" bg-primary border border-2 d-flex align-items-center justify-content-center"
        style={{ width: "15rem", height: "15rem", fontSize: "5rem" }}
        onClick={() => {
          if (state.boardSquares[props.id] === null) {
            dispatch({ type: "PLAYER_MOVE", squareNumber: props.id });
          }
        }}
      >
        {/* {props.value} */}
        {state.boardSquares[props.id]}
        {/* {state.boardSquares[props.id] === null && (state.playerX ? "X" : "O")} */}
      </div>
    </div>
  );
};

export default Square;
