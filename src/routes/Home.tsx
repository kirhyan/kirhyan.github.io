import Avatar from "../assets/images/Avatar-copy.png";
import WebImage from "../assets/images/Web-image2.png";
import styles from "./Layout.module.css";

export default function Home() {
  return (
    <section className={styles.homePage}>
      <div className={styles.homeContainer1}>
        <div className={styles.homeText}>HOME</div>
        <img className={styles.webImage} src={WebImage} />
      </div>

      <div className={styles.homeContainer2}>
        <div className={styles.homePresentation}>PRESENTATION</div>
        <img className={styles.avatar} src={Avatar} />
      </div>
    </section>
  );
}
