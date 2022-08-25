import React from "react";
import socialLinks from "../libs//socialLinks";
import Link from "next/link";
import styles from "../styles/Links.module.css";

const Links = () => {
  return (
    <ul className={styles.links}>
      {socialLinks.map((item, index) => {
        const { name, icon, path } = item;
        return (
          <li key={index}>
            <Link href={path}>{icon}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
