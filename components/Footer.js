import React from "react";
import styles from "../styles/Footer.module.css";
import socialLinks from "../libs/socialLinks";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`parts-grid ${styles.footer}`}>
      <div className={styles.center}>
        <div className={styles.title}>
          <img src="/logo-footer.png" alt="logo" />
          <h4>engawakobo</h4>
        </div>
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
      </div>
      <p className={styles.copyright}>@2022 ENGAWAKOBO All rights reserverd</p>
    </footer>
  );
};

export default Footer;
