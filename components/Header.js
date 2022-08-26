import React from "react";
import styles from "../styles/Header.module.css";
import { Menu } from "react-feather";
import Link from "next/link";
import { links } from "../libs/links";

const Header = () => {
  return (
    <header className={`parts-grid ${styles.header}`}>
      <div className={styles.headerCenter}>
        <Link href="/">
          <a className={styles.titlebox}>
            <img src="/favicon.png" alt="logo" className={styles.icon} />
            engawakobo
          </a>
        </Link>
        <nav className={styles.nav}>
          <div className={styles.navSp}>
            <button className="btn">
              <Menu />
            </button>
          </div>
          <ul className={styles.navPc}>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
