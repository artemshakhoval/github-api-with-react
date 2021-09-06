import React from "react";
import Repo from "./repo";
import repoDetails from "../modal/repoDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const RepoContent = (props) => {
  const { data, arr } = props;

  return (
    <>
      <Router>
        <Repo data={data} arr={arr} />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/details" component={repoDetails} />
        </Switch>
      </Router>
    </>
  );
};

// const Home = () => {
//   return (
//     <>
//       <Button>Go to home</Button>
//     </>
//   );
// };

export default RepoContent;
