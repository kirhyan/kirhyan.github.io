import AboutImage from "../assets/images/Programmer.png";
import styles from "./Layout.module.css";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutText}>
        <h2>ABOUT ME </h2>
      </div>
      <div className={styles.aboutImage}>
        <img src={AboutImage} width={900} />
      </div>
    </div>
  );
}
