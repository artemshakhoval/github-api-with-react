import React, { useState } from "react";
import Wrapper from "./Wrapper";
import axios from "axios";

const Index = () => {
  const [repoName, setRepoName] = useState("");
  const [repos, setRepos] = useState([]);

  const fetchedData = async (e) => {
    e.preventDefault();
    await axios.get(`https://api.github.com/users/${repoName}`).then((res) => {
      setRepos((prev) => {
        return [...prev, res.data];
      });
    });

    setRepoName("");
  };

  //console.log(repos);

  const getRepoNameHandler = (e) => {
    setRepoName(e.target.value);
  };

  return (
    <>
      <Wrapper
        fetchedData={fetchedData}
        repoName={repoName}
        repos={repos}
        getRepoNameHandler={getRepoNameHandler}
      />
    </>
  );
};

export default Index;
