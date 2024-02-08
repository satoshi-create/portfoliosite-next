import React from "react";
import { links } from "../libs/links";
import Link from "next/link";
import styles from "../styles/Links.module.css";

const Links = ({props}) => {
  return (
    <ul className={${styles.navPc}
}>
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
