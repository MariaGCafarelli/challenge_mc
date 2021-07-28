import React from "react";
//import "./Home.css";
import Random from "../components/Random/Random";
import Search from "../components/Search/Search";

/**
 * Componente que representa pop-up
 * para editar un elemento
 */
function Home() {

  return (
    <>
      <Random />
      <Search />
      </>
  );
};

export default Home;