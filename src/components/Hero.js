"use client";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isCorrect, setIsCorrect] = useState(true);
  const [nameResult, setNameResult] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCorrect((prev) => {
        const newValue = !prev;
        setNameResult(newValue ? "Liam van Bart" : "Bart van Liam");
        return newValue;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const lines = isCorrect
    ? [
        { content: <span>const getName = () =&gt; &#123;</span> },
        { number: 20, content: <span className={styles.correct}>Liam</span> },
        { number: 21, content: <span className={styles.van}>van</span> },
        { number: 22, content: <span className={styles.correct}>Bart</span> },
        { content: <span>&#125;;</span> },
      ]
    : [
        { content: <span>const getName = () =&gt; &#123;</span> },
        { number: 20, content: <span className={styles.error}>Bart</span> },
        { number: 21, content: <span className={styles.van}>van</span> },
        { number: 22, content: <span className={styles.correct}>Liam</span> },
        { content: <span>&#125;;</span> },
      ];

  return (
    <section className={styles.hero}>
      <div className={styles.leftContent}>
        <h1 className={styles.heroHeading}>Welkom op mijn blog</h1>
        <p className={styles.heroText}>
          Hi ik ben Liam van Bart, aspirant front-end developer
        </p>
        <img
          src="./Liam.jpg"
          alt="Liam van Bart"
          className={styles.profileImage}
        />
      </div>

      <div className={styles.rightContent}>
        <div className={styles.editor}>
          <div className={styles.lines}>
            {lines.map((line, index) => (
              <div key={index} className={styles.line}>
                <span className={styles.lineNumber}>{line.number}</span>
                <span className={styles.lineContent}>{line.content}</span>
              </div>
            ))}
            <div className={styles.line}>
              <span className={styles.lineNumber}></span>
              <span className={styles.lineContent}>
                console.log(&quot;Result: &quot;, getName());
              </span>
            </div>
            <div className={styles.line}>
              <span className={styles.lineNumber}></span>
              <span className={styles.lineContent}>Result: {nameResult}</span>
            </div>
          </div>

          {!isCorrect && (
            <div className={styles.errorMessage}>
              <span>
                <strong>20:</strong> ⚠️ SyntaxError: Unexpected identifier
                &apos;Bart&apos;
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
