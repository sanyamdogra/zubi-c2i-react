import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";

import axios from "axios";

import DataList from "../DataList/DataList";

const Home = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState();

  const fetchData = async () => {
    console.log("Data fetch block");
    const result = await axios("https://jsonplaceholder.typicode.com/todos/");
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {/* <h1> I'm coming Home</h1> */}
      <DataList dataList={data} selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default Home;
