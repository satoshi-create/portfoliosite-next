import React from "react";
import Title from "./Title";
import styles from "../styles/GridImageList.module.css";
import LinkedButton from "./LinkedButton";
import GridImageList from "./GridImageList";

const threedDesign = ({ title }) => {
  const { title1, title2, fontClr, linkbtn } = title;
  return (
    <section className={`parts-grid section-padding ${styles.gridimages}`}>
      <Title title={{ title1, title2, fontClr }} />
      <GridImageList
        props={{
          linkbtn: linkbtn,
          cat: "threed",
        }}
      />
      {/* {GridImages(linkbtn)} */}
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
