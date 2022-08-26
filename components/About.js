import React from "react";
import styles from "../styles/About.module.css";
import Title from "./Title";
import Button from "./Button";

const About = () => {
  return (
    <section className={`parts-grid section-margin ${styles.about}`}>
      <div className="section-padding">
        <Title title={"自己紹介"} />
        <div className={styles.tabcontainer}>
          <div>
            <div className={styles.tabcenter}>
              <button className={`btn ${styles.tabbtn} ${styles.activebtn}`}>
                来歴
              </button>
              <button className={`btn ${styles.tabbtn}`}>スキル</button>
            </div>
            <article className={styles.article}>
              <p>
                東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。
              </p>
              <Button value={{ style: styles.aboutbtn, title: "MORE" }} />
            </article>
          </div>
          <figure className={styles.figure}>
            <img src="/about.png" alt="about" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
