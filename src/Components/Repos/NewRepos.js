import React from "react";
import Searcher from "./Searcher";

const NewRepos = (props) => {
  const { fetchedData, getRepoNameHandler, repoName, isValid } = props;

  return (
    <>
      <Searcher
        fetchedData={fetchedData}
        getRepoNameHandler={getRepoNameHandler}
        repoName={repoName}
        isValid={isValid}
      />
    </>
  );
};

export default NewRepos;
