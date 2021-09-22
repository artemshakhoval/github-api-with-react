import React, { useState } from "react";
import Wrapper from "./Wrapper";
import axios from "axios";

const Index = () => {
  const [repoName, setRepoName] = useState("");
  const [repos, setRepos] = useState([]);
  const [isValid, setIsValid] = useState(true); //////// valid

  const fetchedData = async (e) => {
    e.preventDefault();
    await axios.get(`https://api.github.com/users/${repoName}`).then((res) => {
      setRepos((prev) => {
        return [...prev, res.data];
      });
    });
    // if (repoName.trim().length === 0) {
    //   setIsValid(false);
    //   return;
    // }
    setRepoName("");
  };

  //console.log(repos);

  const getRepoNameHandler = (e) => {
    // if (e.target.value.trim().length > 0) {
    //   setIsValid(true);
    // }
    setRepoName(e.target.value);
  };

  return (
    <>
      <Wrapper
        fetchedData={fetchedData}
        repoName={repoName}
        repos={repos}
        getRepoNameHandler={getRepoNameHandler}
        isValid={isValid}
      />
    </>
  );
};

export default Index;
