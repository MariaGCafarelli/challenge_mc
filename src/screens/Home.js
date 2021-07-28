import React from "react";

import Random from "../components/Random/Random";
import Search from "../components/Search/Search";

/**
 * Wrapper component
 */
function Home() {
  return (
    <>
      <Random />
      <Search />
    </>
  );
}

export default Home;
