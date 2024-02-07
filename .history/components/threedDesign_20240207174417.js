import React from "react";
import Title from "./Title";
import styles from "../styles/GridImages.module.css";

const threedDesign = ({ title }) => {
  const { title1, title2, fontClr, linkbtn } = title;
  return (
    <section className={`section-padding ${styles.gridimages}`}>
      <Title title={{ title1, title2, fontClr }} />
         {linkbtn && (
        <div className={styles.btnconteiner}>
          <Button
            value={{
              style: styles.grafhicbtn,
              title: "全てのグラフィックデザインを見る",
              path: "/graphics",
            }}
          />
    </section>
  );
};

export default threedDesign;
