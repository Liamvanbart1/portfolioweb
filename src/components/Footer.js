import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span className={styles.logo}>Liam van Bart</span>
        <nav className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/projecten">Projecten</Link>
          <Link href="/weeklynerd">Weekly Nerd</Link>
        </nav>
        <span className={styles.copy}>
          &copy; {new Date().getFullYear()} All rights reserved
        </span>
      </div>
    </footer>
  );
}
