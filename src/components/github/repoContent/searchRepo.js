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

const SearchRepo = (props) => {
  const [err, setErr] = useState("");
  const { data, arr, getRepo, fetchData, onChange, addRepo } = props;

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
        <RepoList data={data} arr={arr} getRepo={getRepo} fetchData={fetchData} />
      </Container>
    </>
  );
};

export default SearchRepo;
