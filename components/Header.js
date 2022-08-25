import React from "react";
import styles from "../styles/Header.module.css";
import { Menu } from "react-feather";
import Link from "next/link";
import Links from "./Links";

const Header = () => {
  return (
    <header className={`parts-grid ${styles.header}`}>
      <div className={styles.headerCenter}>
        <Link href="/">
          <a>
            <img src="/favicon.png" alt="logo" />
            engawakobo
          </a>
        </Link>
        <nav className={styles.nav}>
          <div className={styles.navheader}>
            <button className="btn">
              <Menu />
            </button>
          </div>
        </nav>
        <Links/>
      </div>
    </header>
  );
};

export default Header;
