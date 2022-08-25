import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section className={`parts-grid ${styles.about}`}>
      <div className={styles.aboutcenter}>
        <div className={styles.title}>
          <h3>自己紹介</h3>
          <div className={styles.line}></div>
        </div>
        <div className={styles.tabcontainer}>
          <div>
            <div className={styles.tabcenter}>
              <button className={`btn ${styles.tabbtn} ${styles.activebtn}`}>
                来歴
              </button>
              <button className={`btn ${styles.tabbtn}`}>
                スキル
              </button>
            </div>
            <article className={styles.article}>
              <p>
                東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。
              </p>
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
