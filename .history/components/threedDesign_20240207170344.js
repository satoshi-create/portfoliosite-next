import React from "react";
import Title from "./Title";

const threedDesign = ({ title }) => {
  const { title1, title2, bcgClr, linkbtn } = title;
  return (
    <section className={`section-padding ${styles.gridimages}`}>
      <Title title={{ title1, title2 }} />
    </section>
  );
};

export default threedDesign;