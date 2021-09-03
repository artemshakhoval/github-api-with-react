import React from "react";
import { useState, useEffect } from "react";
import Content from "./github/index";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import "animate.css";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    backgroundColor: "#3147b2",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: "0.6rem 0 0.6rem 3rem",
  },
  before: {
    width: "100%",
    backgroundColor: "#000",
    color: "white",
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
    letterSpacing: "0.2rem",
    fontWeight: 700,
    fontSize: "4rem",
  },
  label: {
    fontSize: "1.3rem",
  },
});

const Wrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const classes = useStyles();

  return (
    <>
      {loading === false ? (
        <>
          <Grid className={classes.wrapper}>
            <Typography className={classes.label}>GITHUB API</Typography>
          </Grid>
          <Content />
        </>
      ) : (
        <>
          <Grid className={classes.before}>
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
