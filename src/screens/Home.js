import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Random from "../components/Random/Random";
import Search from "../components/Search/Search";

/**
 * Wrapper component
 */
function Home() {
  return (
    <>
      <Navbar />
      <Random />
      <Search />
    </>
  );
}

export default Home;
