import React from "react";
import Title from "./Title";
import styles from "../styles/GridImages.module.css";
import Image from "next/image";
import { gridImages } from "../libs/gridImages";

const GridImages = ({ title }) => {
  const { title1, bcgClr } = title;
  console.log(bcgClr);
  return (
    <section
      className={`parts-grid section-margin ${
        bcgClr === true ? styles.gridImages1 : styles.gridImages2
      }`}
    >
      <div className="section-padding">
        <Title title={{ title1 }} />
        <div className={styles.gridconteinter}>
          {gridImages.map((item, index) => {
            const { path, name, nameen, AD, author } = item;
            return (
              <figure className={styles.figure} key={index}>
                <Image
                  src={path}
                  layout="fill"
                  objectFit="cover"
                  className={styles.image}
                  alt={nameen}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
                />
                <div className={styles.info}>
                  <p className={styles.name}>{name}</p>
                  <img
                    src="/affinity_designer_icon.png"
                    alt={nameen}
                    className={styles.tool}
                  />
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GridImages;
