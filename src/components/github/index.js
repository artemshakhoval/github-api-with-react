import React, { useEffect, useState } from "react";
import SearchRepo from "./repoContent/searchRepo";
import axios from "axios";

function Content() {
  const [getRepo, setGetRepo] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://api.github.com/users/${getRepo}`);
    setData([res.data]);

    //setGetRepo("");
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const addRepo = (repo) => {
    setData((prev) => [...prev, repo]);
  };

  const onChange = (e) => {
    setGetRepo(e.target.value);
  };

  return (
    <>
      <SearchRepo
        data={data}
        getRepo={getRepo}
        fetchData={fetchData}
        onChange={onChange}
        addRepo={addRepo}
        setGetRepo={setGetRepo}
        content={Content}
      />
    </>
  );
}

export default Content;
