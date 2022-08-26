import React, { useState } from "react";
import styles from "../styles/About.module.css";
import Title from "./Title";
import Button from "./Button";
import Image from "next/image";
import about from "../libs/about";

const About = () => {
  const [tab, seTab] = useState([]);
  const [value, setValue] = useState(0);

  const { desc } = about[value];
  console.log(desc);
  return (
    <section className={`parts-grid section-margin ${styles.about}`}>
      <div className="section-padding">
        <Title title={"自己紹介"} />
        <div className={styles.tabcenter}>
          <div>
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
              <p>{desc}</p>
              <Button
                value={{
                  style: styles.aboutbtn,
                  title: "MORE",
                  path: "/about",
                }}
              />
            </article>
          </div>
          <figure
            style={{ position: "relative", width: "100%", height: "50vh" }}
            className={styles.figure}
          >
            <Image src="/about.png" layout="fill" objectFit="cover" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
