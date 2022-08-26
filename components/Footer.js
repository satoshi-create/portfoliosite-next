import React from "react";
import styles from "../styles/Footer.module.css";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className={`parts-grid ${styles.footer}`}>
      <div className={styles.center}>
        <div className={styles.title}>
          <img src="/logo-footer.png" alt="logo" className={styles.logo} />
          <h4>engawakobo</h4>
        </div>
        <SocialLinks value={{ styleUl: styles.aboutLinks }} />
      </div>
      <p className={styles.copyright}>@2022 ENGAWAKOBO All rights reserverd</p>
    </footer>
  );
};

export default Footer;
