"use client";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isCorrect, setIsCorrect] = useState(true);
  const [nameResult, setNameResult] = useState("");
  const [scrollStyle, setScrollStyle] = useState({});

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

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const maxScroll = 300;
      const ratio = Math.min(y / maxScroll, 1);

      const opacity = 1 - ratio * 0.5;
      const scale = 1 - ratio * 0.2;
      const translateY = -ratio * 20;

      setScrollStyle({
        opacity: opacity.toFixed(6),
        transform: `scale(${scale.toFixed(6)}) translateY(${translateY.toFixed(
          6
        )}px)`,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <section className={styles.hero} style={scrollStyle}>
      <div className={styles.leftContent}>
        <h1 className={styles.heroHeading}>Welcome to my Website</h1>
        <p className={styles.heroText}>
          Hi ik ben Liam van Bart Aspirant front-end developer
        </p>
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
                console.log("Result: ", getName());
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
                'Bart'
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
