"use client"

// navbar.tsx
// navbar.tsx
import React, { useState } from "react";
import NavLinks from "./navlinks";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
      <div className={`${styles.links} ${isMenuOpen ? styles.openLinks : ""}`} onClick={toggleMenu}>
        <NavLinks isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        <p>+23276711110</p>
      </div>
    </div>
  );
}
