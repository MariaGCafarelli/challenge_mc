import React, { useEffect, useState } from "react";
import "./Random.css";

import { getRandomBeer, getRadomNonAlcoholic } from "../../api/beer";
import Loader from "../Loader/Loader";

/**
 * Component that displays a random beer 
 * name, image and description to the user
 */
function Random() {
  /** State for current beer */
  let [beer, setBeer] = useState({});

  /** State to set loader during beer changes */
  let [loader, setLoader] = useState(true);

  /**
   * Function to set new random beer
   */
  function handlerGetBeer() {
    //getRandomBeer(setBeer, setLoader);
  }

  /**
   * Function to set new non alcoholic random beer
   * @param {event} event
   */
  function handlerGetNonAlcoholic(event) {
    event.preventDefault()
    getRadomNonAlcoholic(setBeer, setLoader);
  }

  /**
   * On load page, set new random beer
   */
  useEffect(() => {
    handlerGetBeer();
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
              {beer.image_url && (
                <img
                  src={beer.image_url}
                  alt="beer-img"
                  className="random-beer-img"
                />
              )}
            </div>
            <div className="random-beer-description">
              <p className="content content-medium">{beer.description}</p>
            </div>
            <div className="random-beer-buttons">
              <button
                className="content btn btn-font"
                style={{ marginBottom: 15 }}
                onClick={handlerGetBeer}
              >
                Another Beer
              </button>
              <button
                className="content btn btn-font"
                onClick={handlerGetNonAlcoholic}
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
