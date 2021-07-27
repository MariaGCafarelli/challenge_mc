import React from "react";
import "./Beer.css";

/**
 * Componente que representa pop-up
 * para editar un elemento
 */
function Beer({ beer }) {
  return (
    <div className="beer">
        <img src="" alt="beer-img" className="search-beer-img" />
      
      <div className="beer-description">
        <h1 className="content content-large">{beer.name}</h1>
        <p className="content content-medium">
          The only edge case we’re advised about is if the length of str is less
          than or equal to num, we need to just return str without truncating
          it. Examples/Test Cases: Our provided test cases are pretty
          straightforward. Data Structure: We are given strings and expected to
          return a string. Concatenating (adding together) strings doesn’t
          require us to change our data type or structure, so let’s just stick
          with strings.
        </p>
      </div>
    </div>
  );
}

export default Beer;
