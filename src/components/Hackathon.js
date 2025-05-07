import React from "react";
import styles from "./Hackathon.module.css";

const Hackathon = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.hackaton}>
        <h2>1</h2>
        <p>2</p>
      </div>
      <div className={styles.reflectie}>
        <h2>3</h2>
        <p>4</p>
      </div>
      <div className={styles.inzichten}>
        <h2>5</h2>
        <p>6</p>
      </div>
    </div>
  );
};

export default Hackathon;
