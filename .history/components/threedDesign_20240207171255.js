import React from "react";
import Title from "./Title";
import styles from "../styles/GridImages.module.css";

const threedDesign = ({ title }) => {
  const { title1, title2, fontClr, linkbtn } = title;
  return (
    <section className={`section-padding ${styles.gridimages}`}>
      <Title title={{ title1, title2, fontClr }} />
    </section>
  );
};

export default threedDesign;
