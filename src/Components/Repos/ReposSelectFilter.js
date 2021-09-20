import { Container, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  filterContainer: {
    display: "flex",
    justifyContent: "end",
    padding: 0,
    marginBottom: "1rem",
  },
});

const ReposFilter = (props) => {
  const { filteredLogin, filteredChangeHandler } = props;

  const selectFilterHandler = (e) => {
    filteredChangeHandler(e.target.value);
  };

  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md" className={classes.filterContainer}>
        <TextField
          value={filteredLogin}
          onChange={selectFilterHandler}
          label="Filtering by name"
          variant="outlined"
          size="small"
        />
      </Container>
    </>
  );
};

export default ReposFilter;
