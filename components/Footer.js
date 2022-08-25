import React from "react";
import styles from "../styles/Footer.module.css";
import socialLinks from "../libs//socialLinks";
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
                <Link href={path}>
                  <a>{icon}</a>
                </Link>
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
