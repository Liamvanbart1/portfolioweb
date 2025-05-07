import Spline from "@splinetool/react-spline/next";
import styles from "./Camera.module.css";

export default function Camera() {
  return (
    <div className={styles.SplineScene}>
      <Spline scene="https://prod.spline.design/GTqn14mXF1-DVuAx/scene.splinecode" />
    </div>
  );
}
