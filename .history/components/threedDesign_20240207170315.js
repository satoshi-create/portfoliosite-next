import React from "react";
import Title from "./Title";

const threedDesign = () => {
  return (
    <section className={`section-padding ${styles.gridimages}`}>
      <Title title={{ title1, title2 }} />
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

export default threedDesign;
