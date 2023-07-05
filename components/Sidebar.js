import React, { useContext } from "react";
import { links } from "../libs/links";
import { ContextComponent } from "../libs/context";
import Link from "next/link";
import { X } from "react-feather";
import styles from "../styles/Sidebar.module.css";
import { socialLinks } from "../libs//socialLinks";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(ContextComponent);

  return (
    <div
      className={
        isSidebarOpen
          ? `${styles.wrapper} ${styles.active}`
          : ` ${styles.wrapper} `
      }
      // style={isSidebarOpen && { transition: "ease-in" }}
      // style={{ transition: "all 0.3s linear" }}
    >
      <button
        className={`btn ${styles.closebtn}`}
        onClick={() => closeSidebar()}
      >
        <X className={styles.closeIcon} />
      </button>
      <aside className={styles.aside}>
        <ul className={styles.navLinks}>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.path}>
                  <a onClick={() => closeSidebar()}>{link.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className={styles.socialLinks}>
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
      </aside>
    </div>
  );
};

export default Sidebar;
