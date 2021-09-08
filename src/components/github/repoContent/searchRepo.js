import {
  Container,
  TextField,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import RepoList from "./repoList";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem 0",
  },
  input: {
    width: "30rem",
    marginRight: "1rem",
  },
  btn: {
    width: "8rem",
    height: "3.45rem",
  },
});

const tableHead = [
  "Avatar",
  "Name",
  "Login",
  "Location",
  "More Details",
  "Favorite",
];

const SearchRepo = (props) => {
  const { data, arr, getRepo, fetchData, onChange } = props;

  const classes = useStyles();
  return (
    <>
      <Container>
        <form onSubmit={fetchData} className={classes.container}>
          <TextField
            className={classes.input}
            required
            value={getRepo}
            onChange={onChange}
            label="Enter a repository name"
            variant="outlined"
            helperText="Required"
          />
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={fetchData}
          >
            Search
          </Button>
        </form>
      </Container>

      <Container>
        <RepoList data={data} arr={arr} tableHead={tableHead} />
      </Container>
    </>
  );
};

export default SearchRepo;
