"use client";

import Link from "next/link";
import styles from "./NavItem.module.css";

const NavItem = ({ title, link, isActive }) => {
  return (
    <li className={styles.navItem}>
      <Link
        href={link}
        className={`${styles.navLink} ${isActive ? styles.active : ""}`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
