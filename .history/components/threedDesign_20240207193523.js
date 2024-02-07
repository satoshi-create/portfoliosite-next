import React from "react";
import Title from "./Title";
import styles from "../styles/GridImages.module.css";
import LinkedButton from "./LinkedButton";
import GridImages from "./GridImages";

const threedDesign = ({ title }) => {
  const { title1, title2, fontClr, linkbtn } = title;
  return (
    <section className={`parts-grid section-padding ${styles.gridimages}`}>
      <Title title={{ title1, title2, fontClr }} />
      {GridImages(linkbtn, 3d)}
      {linkbtn && (
        <LinkedButton
          value={{
            btnWidth: "grafhicbtn",
            title: "全ての3Dデザインを見る",
            path: "/threed",
          }}
        />
      )}
    </section>
  );
};

export default threedDesign;
