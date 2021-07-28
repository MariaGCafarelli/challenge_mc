import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

/**
 * Componente that represents a navbar
 * with the title of the project
 */
function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Frontend Position Challenge by María Cafarelli
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  navbar: {
    backgroundColor: "var(--primaryDark)",
    textAlign: "right"
  },
  title: {
    flexGrow: 1,
    fontFamily: "var(--font-family-content)"
  }
}));
