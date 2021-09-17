import React from "react";
import Searcher from "./Searcher";

const NewRepos = (props) => {
  const { fetchedData, getRepoNameHandler, repoName } = props;

  return (
    <>
      <Searcher
        fetchedData={fetchedData}
        getRepoNameHandler={getRepoNameHandler}
        repoName={repoName}
      />
    </>
  );
};

export default NewRepos;
