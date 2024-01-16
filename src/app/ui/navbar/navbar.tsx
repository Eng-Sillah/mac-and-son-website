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
    <div className={styles.container}>
      <div>
        <h1>LOGO</h1>
      </div>
      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isMenuOpen ? styles.openMenu : ""}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.openMenu : ""}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.openMenu : ""}`}></div>
      </div>
      <div className={`${styles.links} ${isMenuOpen ? styles.openLinks : ""}`}>
        <NavLinks isMenuOpen={isMenuOpen} />
        <p>+23276711110</p>
      </div>
    </div>
  );
}
