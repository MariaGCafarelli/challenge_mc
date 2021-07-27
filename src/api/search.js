import { ModalMessage } from "../components/ModalMessage/Modal";

/**
 * Function with api call to get beers by name
 * @param {Function} setBeers
 * @param {Function} setLoader
 * @param {String} name 
 */
function getBeersByName(name, setBeers, setLoader) {
  setLoader(true);
  fetch(`${process.env.REACT_APP_ROOT_ENDPOINT}beers?beer_name=${name}`, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log("response fecth", resp);
      setBeers(resp);
      setLoader(false);
      //return resp
    })
    .catch((err) => {
      ModalMessage("Ups", "Try again later", 5000);
      console.log("fetch err", err);
    });
};

/**
 * Function with api call to get beers by brewed_before
 * @param {Function} setBeers
 * @param {Function} setLoader
 * @param {String} date
 */
 function getBeersByDate(date, setBeers, setLoader) {
  setLoader(true);
  fetch(`${process.env.REACT_APP_ROOT_ENDPOINT}beers?brewed_before=${date}?page=1&per_page=80`, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log("response fecth", resp);
      setBeers(resp);
      setLoader(false);
      //return resp
    })
    .catch((err) => {
      ModalMessage("Ups", "Try again later", 5000);
      console.log("fetch err", err);
    });
};

export { getBeersByName, getBeersByDate };