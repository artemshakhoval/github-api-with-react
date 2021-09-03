import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React from "react";
import RepoDetails from "./repoDetails";

const SetRouter = () => {
  return (
    <>
      <Router>
        <Link to="/details">
          <Button color="primary" variant="contained">
            View More
          </Button>
        </Link>
        <Switch>
          <Route path="/details" component={RepoDetails} />
        </Switch>
      </Router>
    </>
  );
};

export default SetRouter;
