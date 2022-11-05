// import { createContext, useReducer } from "react";

// export const Context = createContext();

// const ContextProvider = ({ children }) => {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "player1":
//         console.log(action.payload.i);
//         console.log(action.payload.id);
//         return { ...state, status: state.status1 };
//       default:
//         return state;
//     }
//   };

//   const initialState = {
//     status: "",
//     status1: "X",
//     status2: "O",
//     winner: "",
//     squareArr: [],
//     player1: true,
//     player2: false,
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
//   );
// };

// export default ContextProvider;
