import React, { useContext } from "react";
import Board from "./Board";
import { Context } from "./Context";
function Game() {
  const { state, dispatch } = useContext(Context);

  const status = state.playerX ? "Next player is X" : "Next player is O";

  return (
    <div className="game">
      <article className=" container  ">
        <section className="row">
          <div className="col-sm-8 game-board">
            <h2 className="text-center" style={{ fontSize: "2.5rem" }}>
              Tic Tac Toe
            </h2>
            <Board />
          </div>
          <div className="col-sm-4 game-info d-flex flex-column align-items-center  justify-content-center  ">
            <button
              className="my-5 btnStart "
              onClick={() => dispatch({ type: "start" })}
            >
              Start the Game
            </button>
            {state.winner === "O" || state.winner === "X" ? (
              <p className="h1" style={{ fontSize: "2.5rem" }}>
                Player {state.winner} won 🥳{" "}
              </p>
            ) : state.winner && state.numberOfMoves === 9 ? (
              <p className="h2">{state.winner}</p>
            ) : (
              <p className="h2">{status}</p>
            )}
            <button
              className="my-5 btnReset"
              onClick={() => dispatch({ type: "reset" })}
            >
              Reset
            </button>
            <ul className="nav nav-pills flex-column">{/* TODO */}</ul>
          </div>
        </section>
      </article>
    </div>
  );
}

export default Game;
