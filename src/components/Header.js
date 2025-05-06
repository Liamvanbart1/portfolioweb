// Header.js
"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${styles.header} ${isOpen ? styles.open : ""}`}>
      <div className={styles.logo}>
        {/* <Image src="/logo.svg" alt="Logo" width={40} height={40} /> */}
        <span>Liam van Bart</span>
      </div>

      <button
        className={styles.menuToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <a href="/">Home</a>
        <a href="/projecten">Projecten</a>
        <a href="/weeklynerd">Weekly Nerd</a>
      </nav>
    </header>
  );
}
