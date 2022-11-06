import React from "react";
import ReactDOM from "react-dom/client";
import Board from "./components/Board";
import Square from "./components/Square";
import Game from "./components/Game";
import "./styles/index.css";
import ContextProvider from "./components/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <Game />
  </ContextProvider>
);
