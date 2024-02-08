import React, { useState } from "react";
import styles from "../styles/About.module.css";
import Title from "./Title";
import Button from "./LinkedButton";
import Image from "next/image";
import { about } from "../libs/about";

TODO 
const About = ({ title }) => {
  const { title1, bcgClr, btn } = title;
  console.log(bcgClr);
  const [value, setValue] = useState(0);

  const { desc } = about[value];
  return (
    <section
      className={`parts-grid section-padding ${
        bcgClr === true && styles.about
      }`}
    >
      <Title title={{ title1 }} />
      <div className={styles.tabcenter}>
        <div className={styles.tabBox}>
          <div className={styles.tabcontainer}>
            {about.map((item, index) => {
              const { title } = item;
              return (
                <button
                  onClick={() => setValue(index)}
                  className={`btn ${styles.tabbtn} ${
                    value === index ? styles.activebtn : ""
                  }`}
                  key={index}
                >
                  {title}
                </button>
              );
            })}
          </div>

          <article className={styles.article}>
            <p className={styles.desc}>{desc}</p>
            {btn && (
              <div className={styles.aboutbtn}>
                <Button
                  value={{
                    title: "MORE",
                    path: "/about",
                  }}
                />
              </div>
            )}
          </article>
        </div>
        <figure className={styles.figure}>
          <Image
            src="/about.png"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
            alt="about-image"
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
