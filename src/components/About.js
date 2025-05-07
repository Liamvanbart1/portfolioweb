"use client";
import { useState } from "react";
import styles from "./About.module.css";
import Link from "next/link";

export default function About() {
  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Leerdoelen voor de minor</h1>
      <p className={styles.p}>Wat wil ik tijdens de minor leren?</p>
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
              <div>
                Ik wil nog meer leren over CSS. Ik heb de basis aan het begin
                van de opleiding geleerd, maar heb daar te lang op vertrouwd. Ik
                merk tijdens de minor dat er nog veel dingen zijn die ik niet
                weet en die vaak handiger/beter zijn dan de oplossingen die ik
                bedenk.
              </div>
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
              <div>
                {" "}
                Ik wil graag meer leren over back-end. Tijdens de API zijn we
                hier al een klein beetje mee bezig geweest door NodeJS te
                gebruiken en dit vond ik erg interessant. Ik hoop hier tijdens
                de meesterproef meer over te kunnen leren.
              </div>
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
              <div>
                Ik wil tijdens de meesterproef graag taakgerichter worden en
                mijn taken op tijd afmaken. Ik merk dat ik vaak goede ideeën
                heb, maar deze door tijdgebrek uiteindelijk niet kan realiseren.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
