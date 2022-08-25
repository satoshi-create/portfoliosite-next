import React from "react";
import styles from "../styles/Card.module.css";
import Title from "./Title";
import { GitHub } from "react-feather";
import Link from "next/link";

const Card = ({ value }) => {
  const { sites, title } = value;
  return (
    <section className={`parts-grid section-margin ${styles.project}`}>
      <div className="section-padding">
        <Title title={title} />
      </div>
      <ul className={styles.cards}>
        {sites.map((item, index) => {
          const { title, src, url, tag, githubUrl } = item;
          return (
            <li className={styles.card} key={index}>
              <Link href={url}>
                <a target="_blank">
                  <figure>
                    <img src={src} alt={title} className={styles.cardImg} />
                  </figure>
                </a>
              </Link>
              <div className={styles.info}>
                <h4 className={styles.infotitle}>{title}</h4>
                <div className={styles.footer}>
                  <ul className={styles.tag}>
                    {tag.map((item, index) => {
                      return (
                        <li className={styles.tagItem} key={index}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                  <Link href={githubUrl}>
                    <a target="_blank">
                      <GitHub className={styles.icon} />
                    </a>
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Card;
