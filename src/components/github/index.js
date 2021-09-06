import React, { useEffect, useState } from "react";
import SearchRepo from "./repoContent/searchRepo";
import axios from "axios";

function Content() {
  const [getRepo, setGetRepo] = useState("");
  const [data, setData] = useState([]);
  const [arr, setArr] = useState([])

  const fetchData = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://api.github.com/users/${getRepo}`);
    setData([res.data]);
    addRepo()
    //setGetRepo("");
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const addRepo = (repo) => {
    // setArr((prev) => ({
    //   arr: [...prev.arr, repo]
    // }))
    let length = 0
    let list = [...data]
    arr.push(list)
    setArr(arr)
    console.log(arr);
  };

  const onChange = (e) => {
    setGetRepo(e.target.value);
  };

  return (
    <>
      <SearchRepo
        data={data}
        arr={arr}
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
