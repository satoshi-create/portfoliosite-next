import React from "react";
import Title from "./Title";
import styles from "../styles/GridImages.module.css";
import LinkedButton from "./LinkedButton";

const threedDesign = ({ title }) => {
  const { title1, title2, fontClr, linkbtn } = title;
  return (
    <section className={`section-padding ${styles.gridimages}`}>
      <Title title={{ title1, title2, fontClr }} />
      {linkbtn && (
          <Button
            value={{
              style: styles.grafhicbtn,
              title: "全ての3Dデザインを見る",
              path: "/graphics",
            }}
          />
        </div>
      )}
    </section>
  );
};

export default threedDesign;
