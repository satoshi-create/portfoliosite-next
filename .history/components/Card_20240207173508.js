import React from "react";
import styles from "../styles/Card.module.css";
import Title from "./Title";
import { GitHub } from "react-feather";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Card = ({ value }) => {
  const { sites, title1, title2, fontClr, linkbtn } = value;
  return (
    <section
      className={`parts-grid section-padding ${
        fontClr === true && styles.container
      }`}
    >
      <Title title={{ title1, title2 }} />

      <ul className={styles.cards}>
        {sites.map((item, index) => {
          const { title, src, url, tag, githubUrl } = item;
          return (
            <li className={styles.card} key={index}>
              <Link href={url}>
                <a target="_blank">
                  <Image
                    src={src}
                    width={1200}
                    height={602}
                    layout="responsive"
                    className={styles.cardImg}
                    alt={title}
                    priority
                  />
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
                  {githubUrl && (
                    <Link href={githubUrl}>
                      <a target="_blank">
                        <GitHub className={styles.icon} />
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {linkbtn && (
        <div className={styles.btnconteiner}>
          <Button
            value={{
              style: styles.cardbtn,
              title: "全てのサイトを見る",
              path: "/sites",
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Card;
