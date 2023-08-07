import React from "react";
import { socialLinks } from "../libs//socialLinks";
import Link from "next/link";
import styles from "../styles/SocialLinks.module.css";


const SocialLinks = ({ value }) => {
  const { styleUl } = value;
  return (
    
    <ul className={`${styles.links} ${styleUl}`}>
      {socialLinks.map((item, index) => {
        const { name, icon, path } = item;
        return (
          <li key={index}>
            <Link href={path}>
              <a className={styles.icon}>{icon}test</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
