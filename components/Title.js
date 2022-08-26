import React from "react";
import styles from "../styles/Title.module.css";

const Title = ({title}) => {
  return (
    <div className={styles.titlebox}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.line}></div>
    </div>
  );
};

export default Title;