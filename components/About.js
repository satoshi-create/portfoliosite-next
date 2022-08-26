import React, { useState } from "react";
import styles from "../styles/About.module.css";
import Title from "./Title";
import Button from "./Button";
import Image from "next/image";
import { about } from "../libs/about";

const About = ({ title }) => {
  const { title1 } = title;
  // const [tab, seTab] = useState([]);
  const [value, setValue] = useState(0);

  const { desc } = about[value];
  console.log(desc);
  return (
    <section className={`parts-grid section-margin ${styles.about}`}>
      <div className="section-padding">
        <Title title={{ title1 }} />
        <div className={styles.tabcenter}>
          <div className={styles.tabBox}>
            {/* about container */}
            <div className={styles.tabcontainer}>
              {about.map((item, index) => {
                const { title } = item;
                return (
                  <>
                    <button
                      onClick={() => setValue(index)}
                      className={`btn ${styles.tabbtn} ${
                        value === index ? styles.activebtn : ""
                      }`}
                    >
                      {title}
                    </button>
                  </>
                );
              })}
            </div>
            {/* about info */}
            <article className={styles.article}>
              <p className={styles.desc}>{desc}</p>
              <Button
                value={{
                  style: styles.aboutbtn,
                  title: "MORE",
                  path: "/about",
                }}
              />
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
      </div>
    </section>
  );
};

export default About;
