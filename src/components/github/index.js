import React, { useState } from "react";
import SearchRepo from "./repoContent/searchRepo";
import axios from "axios";

function Content() {
  const [getRepo, setGetRepo] = useState("");
  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);

  const fetchData = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://api.github.com/users/${getRepo}`);
    addRepo();
    setData([res.data]);
    storageRepo();
    storageData();
    //setGetRepo("");
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const addRepo = (repo) => {
    // setArr((prev) => ({
    //   arr: [...prev.arr, repo]
    // }))
    let list = [...data];
    arr.push(list);
    setArr(arr);
  };

  const storageRepo = () => {
    localStorage.setItem("getRepo", JSON.stringify(getRepo));
    return JSON.parse(localStorage.getItem("getRepo"));
  };

  const storageData = () => {
    localStorage.setItem("arr", JSON.stringify(arr));
    return JSON.parse(localStorage.getItem("arr"));
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
