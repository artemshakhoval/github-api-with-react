import React, { useState } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import ReposItem from "./ReposItem/ReposItem";
import ReposSelectFilter from "./ReposSelectFilter";

const useStyles = makeStyles({
  container: {
    padding: "1rem 1rem 0",
    backgroundColor: "rgba(35, 35, 35, 0.8)",
    border: "1px solid rgba(35, 35, 35, 0.8)",
    borderRadius: "12px",
  },
  contentContainer: {
    padding: 0,
    marginBottom: "1rem",
    backgroundColor: "rgba(68, 68, 68, 0.6)",
    border: "1px solid rgba(35, 35, 35, 0.8)",
  },
  filterContainer: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    marginBottom: "1rem",
  },
  typography: {
    textAlign: "center",
  },
});

const Repos = (props) => {
  const { items } = props;

  const [filteredLogin, setFilteredLogin] = useState("");

  const filteredChangeHandler = (enteredValue) => {
    setFilteredLogin(enteredValue);
  };

  const filteredRepos = items.filter((el) => {
    return el.login.toLowerCase().includes(filteredLogin);
  });

  // const remove = (id) => {
  //   const newRepo = filteredRepos.filter((el) => el.id !== id);
  //   setArr(newRepo);
  // };

  const classes = useStyles();

  return (
    <>
      {items.length ? (
        <ReposSelectFilter
          filteredLogin={filteredLogin}
          filteredChangeHandler={filteredChangeHandler}
        />
      ) : null}

      {filteredRepos.length ? (
        <Container maxWidth="md" className={classes.container}>
          {filteredRepos.map((el, i) => {
            return (
              <Container key={i} className={classes.contentContainer}>
                <ReposItem
                  avatar={el.avatar_url}
                  name={el.name}
                  login={el.login}
                  location={el.location}
                  filteredRepos={filteredRepos}
                  // remove={remove}
                  item={items}
                />
              </Container>
            );
          })}
        </Container>
      ) : (
        <Container maxWidth="md">
          <Typography variant="h5" className={classes.typography}>
            Repository not found
          </Typography>
        </Container>
      )}
    </>
  );
};

export default Repos;
