import { getBeersByName, getBeersByDate } from "../api/search";

function handleSubmit(
  event,
  beerName,
  value,
  selectedDate,
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
    if (beerName.length > 0)
      getBeersByName(beerName, 1, setBeers, setLoader, setNext, setPrev);
    else setHelperText("First type something!");
  } else if (value === "brewed_before") {
    getBeersByDate(selectedDate, 1, setBeers, setLoader, setNext, setPrev);
  } else {
    setHelperText("Please select an option");
  }
}

function handleNameChange(event, setHelperText, setBeerName) {
  event.preventDefault();
  const { name, value } = event.target;
  if (value.length === 0) setHelperText("Type something to search");
  else setHelperText("");
  setBeerName(value);
}

function handleRadioChange(event, setValue) {
  setValue(event.target.value);
}

function handleDateChange(date, setSelectedDate) {
  setSelectedDate(
    date.target.value.slice(5, 7) + "-" + date.target.value.slice(0, 4)
  );
}

export { handleSubmit, handleNameChange, handleRadioChange, handleDateChange };
