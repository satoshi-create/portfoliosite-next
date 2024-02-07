import React, { useContext } from "react";
import Title from "./Title";
import styles from "../styles/GridImages.module.css";
import Image from "next/image";
import { graphicsDesignImages } from "../libs/graphicsDesign";
import Button from "./Button";
import { ZoomIn } from "react-feather";
import { ContextComponent } from "../libs/context";
import Modal from "./Modal";

const GraphicsDesign = ({ title }) => {
  const { title1, title2, fontClr, linkbtn } = title;

  // const shuffleArray = (sourceArr) => {
  //   for (let i = sourceArr.length - 1; i >= 0; i--) {
  //     const randomIndex = Math.floor(Math.random() * (i + 1));
  //     [sourceArr[i], sourceArr[randomIndex]] = [
  //       sourceArr[randomIndex],
  //       sourceArr[i],
  //     ];
  //   }
  //   return sourceArr
  // };

  // const newGridImagesA = shuffleArray(gridImagesA);

  return (
    <section className={`section-padding ${styles.gridimages}`}>
      <Title title={{ title1, title2, fontClr }} />
      {gridImages(linkbtn)}
      {linkbtn && (
        <div className={styles.btnconteiner}>
          <Button
            value={{
              style: styles.grafhicbtn,
              title: "全てのグラフィックデザインを見る",
              path: "/graphics",
            }}
          />
        </div>
      )}
    </section>
  );
};

export default GraphicsDesign;
