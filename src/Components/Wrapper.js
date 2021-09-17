import React, { useState, useEffect } from "react";
import NewRepos from "./Repos/NewRepos";
import Repos from "./Repos/Repos";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import "animate.css";

const useStyles = makeStyles({
  head: {
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "0.6rem 0 0.6rem 3rem",
  },
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "#fff",
    letterSpacing: "0.2rem",
    fontWeight: 700,
    fontSize: "2.5rem",
  },
  label: {
    fontSize: "1.3rem",
  },
});

const Wrapper = (props) => {
  const { fetchedData, getRepoNameHandler, repoName, repos } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const classes = useStyles();

  return (
    <>
      {loading === false ? (
        <>
          <Grid className={classes.head}>
            <Typography className={classes.label}>GITHUB API</Typography>
          </Grid>

          <NewRepos
            fetchedData={fetchedData}
            getRepoNameHandler={getRepoNameHandler}
            repoName={repoName}
          />
          <Repos items={repos} />
        </>
      ) : (
        <>
          <Grid className={classes.head}>
            <Typography className={classes.label}>GITHUB API</Typography>
          </Grid>

          <Container className={classes.container}>
            <Box className="animate__animated animate__fadeInLeftBig">
              <Typography className={classes.name}>Artem Shakhoval</Typography>
            </Box>
          </Container>
        </>
      )}
    </>
  );
};

export default Wrapper;
