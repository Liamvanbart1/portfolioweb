"use client";
import { useState } from "react";
import styles from "./About.module.css";

export default function About() {
  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Leerdoelen voor de minor</h1>
      <div className={styles.table}>
        <div
          className={styles.card}
          style={{ animationDelay: "0s" }}
          onClick={() => setFlip1(!flip1)}
        >
          <div className={`${styles.cardInner} ${flip1 ? styles.flipped : ""}`}>
            <div className={`${styles.cardFace} ${styles.cardFront}`}>
              Leerdoel 1
            </div>
            <div className={`${styles.cardFace} ${styles.cardBack}`}>
              <div>Master frontend fundamentals:</div>
            </div>
          </div>
        </div>

        <div
          className={styles.card}
          style={{ animationDelay: "0.5s" }}
          onClick={() => setFlip2(!flip2)}
        >
          <div className={`${styles.cardInner} ${flip2 ? styles.flipped : ""}`}>
            <div className={`${styles.cardFace} ${styles.cardFront}`}>
              Leerdoel 2
            </div>
            <div className={`${styles.cardFace} ${styles.cardBack}`}>
              <div>Understand modern tooling:</div>
            </div>
          </div>
        </div>

        <div
          className={styles.card}
          style={{ animationDelay: "1s" }}
          onClick={() => setFlip3(!flip3)}
        >
          <div className={`${styles.cardInner} ${flip3 ? styles.flipped : ""}`}>
            <div className={`${styles.cardFace} ${styles.cardFront}`}>
              Leerdoel 3
            </div>
            <div className={`${styles.cardFace} ${styles.cardBack}`}>
              <div>Build full-stack apps:</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
