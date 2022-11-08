import React from "react";
import Link from "next/link";
import styles from "../styles/Breadcrumbs.module.css";

const Breadcrumbs = ({ lists }) => {
  return (
    <section className={`parts-grid`}>
      <ul className={styles.list}>
        {lists.map((list, index) => {
          const { name, path } = list;
          return (
            <li className={styles.item} key={index}>
              {lists.length - 1 === index ? (
                <span aria-current="page">{name}</span>
              ) : (
                <Link href={path}>
                  <a className={`${styles["next"]}`}>{name}</a>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Breadcrumbs;
