import React, { useContext } from "react";
import Title from "./Title";
import styles from "../styles/GraphicDesign.module.css";
import LinkedButton from "./LinkedButton";
import GridImages from "./GridImages";

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
      {GridImages(linkbtn)}
      {linkbtn && (
          <LinkedButton
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
