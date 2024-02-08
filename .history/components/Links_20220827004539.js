import React from "react";
import { links } from "../libs/links";
import Link from "next/link";
import styles from "../styles/Links.module.css";

const Links = ({ value }) => {
  const{style}= value
  return (
    <ul className={`${style} ${styles.navPc}`}>
      {links.map((link, index) => {
        return (
          <li key={index}>
            <Link href={link.path}>
              <a className={styles.navPcLink}>{link.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
