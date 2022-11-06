import { createContext, useReducer } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "PLAYER_MOVE":
        const boardSquares = state.boardSquares;
        const player = state.playerX ? "X" : "O";
        boardSquares[action.squareNumber] = player;
        console.log("Player Move", action.squareNumber);
        // console.log();
        return {
          ...state,
          boardSquares,
          playerX: !state.playerX,
        };

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
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
