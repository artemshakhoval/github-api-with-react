import React from "react";
import Repo from "./repo";
import repoDetails from "../modal/repoDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const RepoContent = (props) => {
  const { data, arr, tableHead } = props;

  return (
    <>
      <Router>
        <Repo data={data} arr={arr} tableHead={tableHead} />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          {/* <Route path="/details" component={repoDetails} /> */}
        </Switch>
      </Router>
    </>
  );
};

export default RepoContent;
