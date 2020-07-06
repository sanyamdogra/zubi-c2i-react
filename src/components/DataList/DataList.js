import React, { useState } from "react";
import styles from "./DataList.module.css";
import { Alert } from "reactstrap";

const DataList = (props) => {
  const displayLists = () =>
    props.dataList.map((item, index) => (
      <div
        className={styles.alertWrapper}
        onClick={() => {
          props.setSelected(index);
        }}
      >
        <Alert
          color={
            props.selected === index || item.completed ? "danger" : "primary"
          }
        >
          {item.title}
        </Alert>
      </div>
    ));

  return (
    <div className={styles.container}>
      <div>DataList</div>
      <div>{displayLists()}</div>
    </div>
  );
};

export default DataList;
