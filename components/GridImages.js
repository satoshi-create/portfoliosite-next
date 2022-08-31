import React from "react";
import Title from "./Title";
import styles from "../styles/GridImages.module.css";
import Image from "next/image";
import { gridImages } from "../libs/gridImages";

const GridImages = ({ title }) => {
  const { title1 } = title;
  return (
    <section className={`parts-grid section-margin ${styles.gridImages}`}>
      <div className="section-padding">
        <Title title={{ title1 }} />
        <div className={styles.gridImagesCenter}>
          {gridImages.map((item, index) => {
            const { path, name } = item;
            return (
              <figure className={styles.figure} key={index}>
                <Image
                  src={path}
                  layout="fill"
                  objectFit="cover"
                  className={styles.image}
                  alt={name}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GridImages;
