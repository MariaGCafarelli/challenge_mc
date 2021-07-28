import { ModalMessage } from "../components/ModalMessage/Modal";

/**
 * Function with api call to get beers by name
 * @param {String} name
 * @param {int} page
 * @param {Function} setBeers
 * @param {Function} setLoader
 * @param {Function} setNext
 * @param {Function} setPrev 
 */
function getBeersByName(name, page, setBeers, setLoader, setNext, setPrev) {
  setLoader(true);
  fetch(`${process.env.REACT_APP_ROOT_ENDPOINT}beers?beer_name=${name}&page=${page}&per_page=20`, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log("response fecth", resp);
      setBeers(resp);
      if(resp.length < 20){
        setNext(false);
        setPrev(true);
      } 
      else {setNext(true); setPrev(true)};
      if(page === 1) setPrev(false);
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
 * @param {String} date
 * @param {int} page
 * @param {Function} setBeers
 * @param {Function} setLoader
 * @param {Function} setNext
 * @param {Function} setPrev
 */
 function getBeersByDate(date, page, setBeers, setLoader, setNext, setPrev) {
  setLoader(true);
  fetch(`${process.env.REACT_APP_ROOT_ENDPOINT}beers?brewed_before=${date}&page=${page}&per_page=20`, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log("response fecth", resp);
      setBeers(resp);
      if(resp.length < 20){
        setNext(false);
        setPrev(true);
      } 
      else {setNext(true); setPrev(true)};
      if(page === 1) setPrev(false);
      setLoader(false);
      //return resp
    })
    .catch((err) => {
      ModalMessage("Ups", "Try again later", 5000);
      console.log("fetch err", err);
    });
};

export { getBeersByName, getBeersByDate };