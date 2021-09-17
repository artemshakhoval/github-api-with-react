import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import ReposItem from "./ReposItem/ReposItem";

const useStyles = makeStyles({
  container: {
    padding: "1rem",
    backgroundColor: "rgba(35, 35, 35, 0.8)",
    border: "1px solid rgba(35, 35, 35, 0.8)",
    borderRadius: "12px",
  },
  containerContent: {
    padding: 0,
    marginBottom: "1rem",
    backgroundColor: "rgba(68, 68, 68, 0.6)",
    border: "1px solid rgba(35, 35, 35, 0.8)",
  },
  typography: {
    textAlign: "center",
  },
});

const Repos = (props) => {
  const { items } = props;

  const classes = useStyles();

  return (
    <>
      {items.length ? (
        <Container maxWidth="md" className={classes.container}>
          {items.map((el, i) => {
            return (
              <Container key={i} className={classes.containerContent}>
                <ReposItem
                  avatar={el.avatar_url}
                  name={el.name}
                  login={el.login}
                  location={el.location}
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
