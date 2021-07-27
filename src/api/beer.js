import { ModalMessage } from "../components/ModalMessage/Modal";

/**
 * Function with api call to set new random beer
 * @param {Function} setBeer
 * @param {Function} setLoader
 */
function getRandomBeer(setBeer, setLoader) {
  setLoader(true);
  fetch(`${process.env.REACT_APP_ROOT_ENDPOINT}beers/random`, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log("response fecth", resp);
      setBeer(resp[0]);
      setLoader(false);
      //return resp
    })
    .catch((err) => {
      ModalMessage("Ups", "Try again later", 5000);
      console.log("fetch err", err);
    });
}

/**
 * Function with api call to set new non alcoholic random beer
 * @param {Function} setBeer
 * @param {Function} setLoader
 */
function getRadomNonAlcoholic(setBeer, setLoader) {
  setLoader(true);

  fetch(`${process.env.REACT_APP_ROOT_ENDPOINT}beers?abv_lt=0.5`, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((resp) => {
      //console.log("response fecth", resp);
      if (resp.lenght > 0) setBeer(resp[0]);
      else ModalMessage("Ups", "No non-alcoholic beers could be found", 6000);
      setLoader(false);
      //return resp
    })
    .catch((err) => {
      ModalMessage("Ups", "Try again later", 6000);
      console.log("fetch err", err);
    });
}

export { getRandomBeer, getRadomNonAlcoholic };
