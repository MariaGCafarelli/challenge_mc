import React from "react";
import "./Search.css";
import { makeStyles } from "@material-ui/core/styles";

import { handleNameChange, handleDateChange } from "../../helpers/handlers";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";

/**
 * Componente that represents the
 * type of input to search, by name or by date
 * uses material styles to change root components
 * Input, TextField, Icons and HelperText
 */
function Search({
  value,
  helperText,
  setHelperText,
  setBeerName,
  setSelectedDate,
}) {
  const classes = useStyles();

  return (
    <>
      {value === "name" ? (
        <>
          <div component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Search"
              onChange={(event) =>
                handleNameChange(event, setHelperText, setBeerName)
              }
              pattern="[A-Za-z0-9_-]{1,15}"
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
          onChange={(date) => handleDateChange(date, setSelectedDate)}
        />
      )}
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
