"use client"

import React, { useState } from "react";
import NavLinks from "./navlinks";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.container} ${isMenuOpen ? styles.openMenu : ""}`}>
      <div>
        <h1>LOGO</h1>
      </div>
      <div className={styles.links}>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <NavLinks />
        <p>+23276711110</p>
      </div>
    </div>
  );
}
