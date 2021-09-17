import React from "react";
import { Container, TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#a892ee",
    padding: "2rem 5rem",
    margin: "2rem auto",
    borderRadius: "12px",
    boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
  },
  input: {
    width: "75%",
    marginRight: "1.5rem",
  },
  btn: {
    padding: "1rem 2rem",
    backgroundColor: "#40005d",
  },
});

const Searcher = (props) => {
  const { fetchedData, getRepoNameHandler, repoName } = props;

  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <TextField
          className={classes.input}
          value={repoName}
          onChange={getRepoNameHandler}
          label="Enter a repository name"
          variant="outlined"
        />
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={fetchedData}
        >
          Search
        </Button>
      </Container>
    </>
  );
};

export default Searcher;
