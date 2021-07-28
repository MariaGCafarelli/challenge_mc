import React, { useState } from "react";
import "./Search.css";

import {
  handleSubmit,
  handleRadioChange,
} from "../../helpers/handlers";

import Beer from "../Beer/Beer";
import Input from "./Input";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Loader from "../Loader/Loader";
import PaginationButtons from "../PaginationButtons/PaginationBUttons";

function Search() {

  /**
   * State for option selected (value), prev and next page, helper text,
   * selectedDate on the calendar, page to control pagiation
   * beerName as the user input, current beers searched and loader
   * */
  const [value, setValue] = React.useState("name");
  const [beerName, setBeerName] = useState("");
  const [next, setNext] = React.useState(true);
  const [prev, setPrev] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState("07-2021");
  const [beers, setBeers] = useState();
  const [loader, setLoader] = useState(false);
  const [page, setPage] = React.useState(1);

  return (
    <>
      <div className="search-form">
        <Input value={value} helperText={helperText} setHelperText={setHelperText} setBeerName={setBeerName} setSelectedDate={setSelectedDate} />

        <form
          onSubmit={(event) =>
            handleSubmit(
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
            )
          }
        >
          <FormControl>
            <RadioGroup
              row
              aria-label="options"
              name="options"
              value={value}
              onChange={(event) => handleRadioChange(event, setValue)}
            >
              <FormControlLabel
                value="name"
                control={<Radio />}
                label="by name"
              />
              <FormControlLabel
                value="brewed_before"
                control={<Radio />}
                label="by brewed_before"
              />
            </RadioGroup>

            <button className="content btn btn-font" type="submit">
              Search
            </button>
          </FormControl>
        </form>
      </div>

      {beers ? (
        beers.length > 0 ? (
          <>
            <PaginationButtons
              value={value}
              page={page}
              setPage={setPage}
              next={next}
              prev={prev}              
              beerName={beerName}
              selectedDate={selectedDate}
              setBeers={setBeers}
              setLoader={setLoader}
              setNext={setNext}
              setPrev={setPrev}
            />
            {beers.map((beer, index) => (
              <Beer beer={beer} key={index} />
            ))}
            <PaginationButtons
              value={value}
              page={page}
              setPage={setPage}
              next={next}
              prev={prev}              
              beerName={beerName}
              selectedDate={selectedDate}
              setBeers={setBeers}
              setLoader={setLoader}
              setNext={setNext}
              setPrev={setPrev}
            />
          </>
        ) : (
          <h1
            className="content content-large"
            style={{ textAlign: "center", margin: 50 }}
          >
            There are no beers matching your search
          </h1>
        )
      ) : null}

      {loader && <Loader />}
    </>
  );
}

export default Search;