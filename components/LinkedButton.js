import React from "react";
import styles from "../styles/Button.module.css";
import Link from "next/link";

const LinkedButton = ({ value }) => {
  const { btnWidth, title, path } = value;
  return (
    <div className={styles.btnconteiner}>
      <Link href={path}>
        <a className={styles.link}>
          <button className={`btn ${styles[btnWidth]} ${styles.cmnbtn}`}>
            {title}
          </button>
        </a>
      </Link>
    </div>
  );
};

export default LinkedButton;
