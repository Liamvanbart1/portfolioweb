import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span className={styles.logo}>Liam van Bart</span>
        <nav className={styles.links}>
          <a href="/">Home</a>
          <a href="/projecten">Projecten</a>
          <a href="/weeklynerd">Weekly Nerd</a>
        </nav>
        <span className={styles.copy}>
          &copy; {new Date().getFullYear()} All rights reserved
        </span>
      </div>
    </footer>
  );
}
