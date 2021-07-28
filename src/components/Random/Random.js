import React, { useEffect, useState } from "react";
import "./Random.css";

import { handlerGetBeer, handlerGetNonAlcoholic } from "../../helpers/handlers";
import Loader from "../Loader/Loader";

/**
 * Component that displays a random beer
 * name, image and description to the user
 */
function Random() {
  /** State for current beer and loader */
  let [beer, setBeer] = useState({});
  let [loader, setLoader] = useState(true);

  /**
   * On load page, set new random beer
   */
  useEffect(() => {
    handlerGetBeer(setBeer, setLoader);
  }, []);

  return (
    <div className="random-container">
      {loader ? (
        <Loader />
      ) : (
        <>
          <h1 className="content content-large">{beer.name}</h1>
          <div className="random">
            <div className="random-beer">
              {beer.image_url ? (
                <img
                  src={beer.image_url}
                  alt="beer-img"
                  className="random-beer-img"
                />
              ) : (<div className="default-img"></div>)}
            </div>
            <div className="random-beer-description">
              <p className="content content-medium">{beer.description}</p>
            </div>
            <div className="random-beer-buttons">
              <button
                className="content btn btn-font"
                style={{ marginBottom: 15 }}
                onClick={() => handlerGetBeer(setBeer, setLoader)}
              >
                Another Beer
              </button>
              <button
                className="content btn btn-font"
                onClick={(event) => handlerGetNonAlcoholic(event, setBeer, setLoader)}
              >
                Random non alcoholic beer
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Random;
