import React from "react";
import styles from "../styles/Hero.module.css";
import socialLinks from "../libs/socialLinks";

const Hero = () => {
  return (
    <section className="parts-grid">
      <div className={styles.box}>
        <figure className={styles.heroFigure}>
          <img src="/hero.png" className={styles.heroImg} />
        </figure>
        <div className={styles.title}>
          <h1>縁</h1>
          <h1>側</h1>
          <h1>工</h1>
          <h1>房</h1>
          <div className={styles.engawaline}>
            <div className={`${styles.line} ${styles.yoko}`}></div>
            <div className={`${styles.line} ${styles.tate}`}></div>
          </div>
        </div>
        <h2 className={`${styles.catch} ${styles.catch1}`}>MARGINAL</h2>
        <h2 className={`${styles.catch} ${styles.catch2}`}>DESIGN</h2>
        <ul className={styles.links}>
          {socialLinks.map((item, index) => {
            const { name, icon, path } = item;
            return (
              <li key={index}>
                <socialLinks href={path}>
                  <a className={styles.icon}>{icon}</a>
                </socialLinks>
              </li>
            );
          })}
        </ul>
        <button className={`btn ${styles.herobtn}`}>作品を見る</button>
      </div>
    </section>
  );
};

export default Hero;
