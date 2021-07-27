import React from "react";

import { GlobalStyle } from "./styles/Global";
import "./App.css";
import "./styles/Theme/variables.css";
import "./styles/Typography/content.css";

import Home from "./screens/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;