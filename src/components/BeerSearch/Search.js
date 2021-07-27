import React, { useState } from "react";
import "./Search.css";
import { makeStyles } from "@material-ui/core/styles";

import { getBeersByName, getBeersByDate } from "../../api/search";
import Beer from "../Beer/Beer";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Loader from "../Loader/Loader";

function Search() {
  const classes = useStyles();

  const [value, setValue] = React.useState("name");
  const [next, setNext] = React.useState(true);
  const [prev, setPrev] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  const [beerName, setBeerName] = useState("");
  const [selectedDate, setSelectedDate] = React.useState("07-2021");
  const [beers, setBeers] = useState();
  /** State to set loader during beer changes */
  let [loader, setLoader] = useState(false);
  const [page, setPage] = React.useState(1);

  const nextPage = (event, value) => {
    setPage(page + 1);
    getBeersByDate(
      selectedDate,
      page + 1,
      setBeers,
      setLoader,
      setNext,
      setPrev
    );
  };

  const prevPage = (event, value) => {
    if (page > 1) {
      setPage(page - 1);
      getBeersByDate(
        selectedDate,
        page - 1,
        setBeers,
        setLoader,
        setNext,
        setPrev
      );
    }
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(
      date.target.value.slice(5, 7) + "-" + date.target.value.slice(0, 4)
    );
    //console.log(date.target.value.slice(5, 7)+'-'+date.target.value.slice(0, 4));
  };

  const handleChange = (event, index) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (value.length === 0) setHelperText("Type something to search");
    else setHelperText("");
    setBeerName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "name") {
      if (beerName.length > 0) getBeersByName(beerName, setBeers, setLoader);
      else setHelperText("First type something!");
    } else if (value === "brewed_before") {
      getBeersByDate(selectedDate, 1, setBeers, setLoader, setNext, setPrev);
      setPage(1);
    } else {
      setHelperText("Please select an option");
    }
  };

  return (
    <>
      <button disabled={!next} onClick={nextPage}>
        Next
      </button>
      <button disabled={!prev} onClick={prevPage}>
        Prev
      </button>

      <div className="search-form">
        {value === "name" ? (
          <>
            <div component="form" className={classes.root}>
              <InputBase
                className={classes.input}
                placeholder="Search"
                onChange={handleChange}
              />
              <SearchIcon className={classes.icon} />
            </div>
            <FormHelperText>{helperText}</FormHelperText>
          </>
        ) : (
          <TextField
            variant="outlined"
            id="date"
            label="Brewed before of"
            type="date"
            defaultValue="2021-07-27"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              max: "2021-07-27",
            }}
            onChange={handleDateChange}
          />
        )}

        <form onSubmit={handleSubmit}>
          <FormControl
            component="fieldset"
            error={error}
            className={classes.formControl}
          >
            <RadioGroup
              row
              aria-label="options"
              name="options"
              value={value}
              onChange={handleRadioChange}
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
      {beers
        ? beers.length > 0
          ? beers.map((beer, index) => <Beer beer={beer} key={index}/>)
          : null
        : null}
    {loader && <Loader />}  
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    border: "1px var(--uiMidGrey) solid",
    borderRadius: 4,
    width: "40%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  icon: {
    padding: 10,
  },
  textField: {
    width: "40%",
  },
}));

export default Search;
