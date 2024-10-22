import styles from "./Card.module.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGit,
} from "react-icons/si";

export default function AboutCardDev() {
  return (
    <div className={styles.iconsDev}>
      <div className={styles.cardAbout}>
        <div className={styles.tooltip}>
          <span className={styles.tooltipText}>HTML</span>
          <SiHtml5 />
        </div>
      </div>
      <div className={styles.cardAbout}>
        <div className={styles.tooltip}>
          <span className={styles.tooltipText}>CSS</span>
          <SiCss3 />
        </div>
      </div>
      <div className={styles.cardAbout}>
        <div className={styles.tooltip}>
          <span className={styles.tooltipText}>Javascript</span>
          <SiJavascript />
        </div>
      </div>
      <div className={styles.cardAbout}>
        <div className={styles.tooltip}>
          <span className={styles.tooltipText}>Typescript</span>
          <SiTypescript />
        </div>
      </div>
      <div className={styles.cardAbout}>
        <div className={styles.tooltip}>
          <span className={styles.tooltipText}>React</span>
          <SiReact />
        </div>
      </div>
      <div className={styles.cardAbout}>
        <div className={styles.tooltip}>
          <span className={styles.tooltipText}>Git</span>
          <SiGit />
        </div>
      </div>
    </div>
  );
}
