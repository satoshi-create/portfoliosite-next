import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import { Menu } from "react-feather";
import Link from "next/link";
import Links from "./Links";

const Header = () => {
  const [stickyClass, setStickyClass] = useState("");

  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    windowHeight > 80 ? setStickyClass("header-fixed") : setStickyClass("");
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);
  return (
    <header className={`parts-grid ${styles.header} ${styles[stickyClass]}`}>
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
          <Links
            value={{
              style: styles.headerNavPc,
            }}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
