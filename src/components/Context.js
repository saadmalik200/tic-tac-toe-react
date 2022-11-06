import { createContext, useReducer } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  function determineWinner(player, boardSquares) {
    if (
      (boardSquares["1"] === player &&
        boardSquares["2"] === player &&
        boardSquares["3"] === player) ||
      (boardSquares["4"] === player &&
        boardSquares["5"] === player &&
        boardSquares["6"] === player) ||
      (boardSquares["7"] === player &&
        boardSquares["8"] === player &&
        boardSquares["9"] === player) ||
      (boardSquares["1"] === player &&
        boardSquares["4"] === player &&
        boardSquares["7"] === player) ||
      (boardSquares["2"] === player &&
        boardSquares["5"] === player &&
        boardSquares["8"] === player) ||
      (boardSquares["3"] === player &&
        boardSquares["6"] === player &&
        boardSquares["9"] === player) ||
      (boardSquares["1"] === player &&
        boardSquares["5"] === player &&
        boardSquares["9"] === player) ||
      (boardSquares["3"] === player &&
        boardSquares["5"] === player &&
        boardSquares["7"] === player)
    ) {
      return player;
    }
    return null;
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "PLAYER_MOVE":
        // if winner trigger reset
        if (state.winner === "X" || state.winner === "O") {
          return state;
        }
        if (state.start) {
          const boardSquares = state.boardSquares;
          const player = state.playerX ? "X" : "O";
          boardSquares[action.squareNumber] = player;
          let winner = determineWinner(player, state.boardSquares);
          // console.log("Player Move", action.squareNumber);
          // console.log();
          return {
            ...state,
            boardSquares,
            playerX: !state.playerX,
            winner,
          };
        } else {
          return state;
        }

      case "start":
        return { ...state, start: true };

      case "reset":
        return {
          ...state,
          boardSquares: {
            1: null,
            2: null,
            3: null,
            4: null,
            5: null,
            6: null,
            7: null,
            8: null,
            9: null,
          },
          playerX: true,
          winner: null,
          start: false,
        };
      default:
        return state;
    }
  };

  const initialState = {
    boardSquares: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
    },
    playerX: true,
    winner: null,
    start: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
