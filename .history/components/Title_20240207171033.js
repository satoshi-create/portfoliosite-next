import React from "react";
import styles from "../styles/Title.module.css";

const Title = ({ title }) => {
  const { title1, title2,bc } = title;
  return (
    <div className={styles.titlebox}>
      <h3 className={styles.title}>
        <span className={title2} style={{ color: "var(--primary-green-01)" }}>
          {title1}
        </span>
        {title2 && title2}
      </h3>
      <div className={styles.line}></div>
    </div>
  );
};

export default Title;
