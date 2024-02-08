import React, { useContext } from "react";
import styles from "../styles/Header.module.css";
import { Menu } from "react-feather";
import Link from "next/link";
import Links from "./Links";
import { links } from "../libs/links";
import { ContextComponent } from "../libs/context";
import Sidebar from "./Sidebar";

const Header = ({ fixed }) => {
  const { openSidebar, stickyClass } = useContext(ContextComponent);

  return (
    <header
      className={`parts-grid ${styles.header} ${fixed && styles[stickyClass]}`}
    >
      <div className={styles.headerCenter}>
        <Link href="/">
          <a className={styles.titlebox}>
            <img src="/favicon.png" alt="logo" className={styles.icon} />
            engawakobo
          </a>
        </Link>
        <nav className={styles.nav}>
          <div className={styles.navSp}>
            <button className="btn" onClick={() => openSidebar()}>
              <Menu />
            </button>
          </div>
          <Sidebar />
           <Links sty/>
        </nav>
      </div>
    </header>
  );
};

export default Header;
