import React from "react";
import socialLinks from "../libs//socialLinks";
import Link from "next/link";
import styles from "../styles/SocialLinks.module.css";

const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((item, index) => {
        const { name, icon, path } = item;
        return (
          <li key={index} >
            <Link href={path}>
              <a className={styles.icon}>{icon}</a>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default SocialLinks;
