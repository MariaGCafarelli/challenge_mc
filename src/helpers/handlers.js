import { getBeersByName, getBeersByDate } from "../api/search";
import { getRandomBeer, getRadomNonAlcoholic } from "../api/beer";

/**
 * Function to handle form submit
 * @param {event} event
 * @param {Function} setBeers
 * @param {Function} setLoader
 * @param {Function} setNext
 * @param {Function} setPrev
 * @param {Function} setHelperText
 * @param {Function} setPage
 */
function handleSubmit(
  event,
  beerName,
  value,
  selectedDate,
  helperText,
  setBeers,
  setLoader,
  setNext,
  setPrev,
  setHelperText,
  setPage
) {
  event.preventDefault();
  setBeers();
  setPage(1);
  if (value === "name") {
    if (beerName.length > 0 && helperText.length === 0)
      getBeersByName(beerName, 1, setBeers, setLoader, setNext, setPrev);
    else setHelperText("First type something!");
  } else if (value === "brewed_before") {
    getBeersByDate(selectedDate, 1, setBeers, setLoader, setNext, setPrev);
  } else {
    setHelperText("Please select an option");
  }
}

/**
 * Function to handle input change on search by name
 * used a regular expression to validate input
 * @param {event} event
 * @param {Function} setHelperText
 * @param {Function} setBeerName
 */
function handleNameChange(event, setHelperText, setBeerName) {
  event.preventDefault();
  const { value } = event.target;
  if (value.length === 0) setHelperText("Type something to search");
  else if (!(/^[a-z\d\-_\s]+$/i.test(value))) setHelperText("You can't use any special character, try again")
  else setHelperText("");
  setBeerName(value);
}

/**
 * Function to set radio selection change
 * as search type
 * @param {event} event
 * @param {Function} setValue
 */
function handleRadioChange(event, setValue) {
  setValue(event.target.value);
}

/**
 * Function to set selected date
 * @param {String} date
 * @param {Function} setSelectedDate
 */
function handleDateChange(date, setSelectedDate) {
  setSelectedDate(
    date.target.value.slice(5, 7) + "-" + date.target.value.slice(0, 4)
  );
}

/**
 * Function to set new random beer
 * @param {Function} setBeer
 * @param {Function} setLoader
 */
function handlerGetBeer(setBeer, setLoader) {
  getRandomBeer(setBeer, setLoader);
}

/**
 * Function to set new non alcoholic random beer
 * @param {event} event
 * @param {Function} setBeer
 * @param {Function} setLoader
 */
function handlerGetNonAlcoholic(event, setBeer, setLoader) {
  event.preventDefault();
  getRadomNonAlcoholic(setBeer, setLoader);
}

export {
  handleSubmit,
  handleNameChange,
  handleRadioChange,
  handleDateChange,
  handlerGetBeer,
  handlerGetNonAlcoholic
};
