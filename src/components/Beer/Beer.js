import React from "react";
import "./Beer.css";

/**
 * Componente that represents the
 * detail of each beer searched, image, name 
 * and description
 */
function Beer({ beer }) {
  return (
    <div className="beer">
      {beer.image_url && (
        <img src={beer.image_url} alt="beer-img" className="search-beer-img" />
      )}
      <div className="beer-description">
        <h1 className="content content-large">{beer.name}</h1>
        <p className="content content-medium">{beer.description}</p>
      </div>
    </div>
  );
}

export default Beer;