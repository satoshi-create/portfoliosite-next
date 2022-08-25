import React from "react";
import styles from "../styles/Card.module.css";
import Title from "./Title";
import { GitHub } from "react-feather";
import Link from "next/link";

const Card = () => {
  return (
    <section className={`parts-grid section-margin ${styles.project}`}>
      <div className="section-padding">
        <Title title={"プロジェクトサイト"} />
      </div>
      <ul className={styles.cards}>
        <li className={styles.card}>
          <Link href="/about">
            <figure>
              <img
                src="/thumb-project.png"
                alt="project"
                className={styles.cardImg}
              />
            </figure>
          </Link>
          <div className={styles.info}>
            <h4 className={styles.infotitle}>横スクロールで楽しむ絵巻物</h4>
            <div className={styles.footer}>
              <ul className={styles.cat}>
                <li className={styles.catItem}>HTML</li>
                <li className={styles.catItem}>CSS</li>
                <li className={styles.catItem}>JAVASCRIPT</li>
              </ul>
              <GitHub className={styles.icon} />
            </div>
          </div>
        </li>
        <li className={styles.card}>
          <Link href="/about">
            <figure>
              <img
                src="/thumb-project.png"
                alt="project"
                className={styles.cardImg}
              />
            </figure>
          </Link>
          <div className={styles.info}>
            <h4 className={styles.infotitle}>横スクロールで楽しむ絵巻物</h4>
            <div className={styles.footer}>
              <ul className={styles.cat}>
                <li className={styles.catItem}>HTML</li>
                <li className={styles.catItem}>CSS</li>
                <li className={styles.catItem}>JAVASCRIPT</li>
              </ul>
              <GitHub className={styles.icon} />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Card;
